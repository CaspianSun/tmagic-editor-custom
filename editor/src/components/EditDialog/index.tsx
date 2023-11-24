import { ref, type ComputedRef, type FunctionalComponent, nextTick, computed } from 'vue'
import { ElButton, ElDialog } from 'element-plus'
import { cloneDeep } from 'lodash-es'
import s from './index.module.scss'

export enum EditDialogType {
  ADD = 'ADD',
  EDIT = 'EDIT',
  COPY = 'COPY',
  SUBLEVEL = 'SUBLEVEL'
}

type ShowDialogOptions<T> =
  | {
      type?: EditDialogType.ADD
      data?: any
    }
  | {
      type: EditDialogType.EDIT | EditDialogType.COPY | EditDialogType.SUBLEVEL
      data: T
    }

type CreateEditDialogOptions<T> = {
  width?: string
  title?: string
  addTitle?: string
  editTitle?: string
  copyTitle?: string
  tip?: string
  addConfirmButtonText?: string
  editConfirmButtonText?: string
  copyConfirmButtonText?: string
  confirm: (type: EditDialogType) => Promise<void>
  openCallBack?: ({ data, type }: ShowDialogOptions<T>) => void
  closeCallback?: (...args: any[]) => void
  refresh?: () => void
}

/**
 * @description: 创建编辑弹窗
 * @param {CreateEditDialogOptions<T>} options
 * @param {string} options.width 弹窗宽度
 * @param {string} options.title 弹窗标题
 * @param {string} options.addTitle 新增弹窗标题
 * @param {string} options.editTitle 编辑弹窗标题
 * @param {string} options.copyTitle 复制弹窗标题
 * @param {string} options.tip 弹窗提示
 * @param {string} options.addConfirmButtonText 新增弹窗确认按钮文字
 * @param {string} options.editConfirmButtonText 编辑弹窗确认按钮文字
 * @param {string} options.copyConfirmButtonText 复制弹窗确认按钮文字
 * @param {({data: T | undefined | any, type: EditDialogType}) => void} options.openCallBack 弹窗打开回调
 * @param {(type: EditDialogType) => Promise<void>} options.confirm 确认按钮回调
 * @param {(...args: any[]) => void} options.closeCallback 弹窗关闭回调
 * @param {() => void} options.refresh 刷新列表
 * @return {*}
 * @example:
 * const { open, Dialog } = new CreateEditDialog<TableListItem>({
 *  width: '550px',
 *  title: '标签',
 *  confirm: async (type) => {
 *   switch (type) {
 *    case EditDialogType.ADD:
 *      await add(params)
 *      break
 *    case EditDialogType.EDIT:
 *      await edit(params)
 *      break
 *    case EditDialogType.COPY:
 *      await copy(params)
 *      break
 *    case EditDialogType.SUBLEVEL:
 *      await sublevel(params)
 *      break
 *   }
 * },
 * closeCallback: () => {
 *   editDialog.updateId.value = undefined
 * },
 * openCallBack: (data, type) => {
 *   switch (type) {
 *    case EditDialogType.ADD:
 *      break
 *    case EditDialogType.EDIT:
 *    case EditDialogType.COPY:
 *    case EditDialogType.SUBLEVEL:
 *      editDialog.updateId.value = data?.id
 *      break
 *    }
 * },
 * refresh: () => {
 *    tableRef.value?.refresh()
 * }
 * })
 *
 * <Dialog>
 *  <div>编辑弹窗内容</div>
 * </Dialog>
 *
 * <ElButton onClick={() => editDialog.open({})}>打开新增弹窗</ElButton>
 * <ElButton onClick={() => editDialog.open({ type: EditDialogType.EDIT, data: record })}>打开编辑弹窗</ElButton>
 * <ElButton onClick={() => editDialog.open({ type: EditDialogType.COPY, data: record })}>打开复制弹窗</ElButton>
 * <ElButton onClick={() => editDialog.open({ type: EditDialogType.SUBLEVEL, data: record })}>打开子级弹窗</ElButton>
 */
export class CreateEditDialog<T = any> {
  constructor(options: CreateEditDialogOptions<T>) {
    if (options.width) this.width.value = options.width
    this.confirm = options.confirm
    this.closeCallback = options.closeCallback
    const { addTitle, title, editTitle, copyTitle } = options
    this.title = computed(() => {
      return this.type.value === EditDialogType.ADD || this.type.value === EditDialogType.SUBLEVEL
        ? addTitle ?? `添加${title}`
        : this.type.value === EditDialogType.EDIT
          ? editTitle ?? `编辑${title}`
          : copyTitle ?? `复制${title}`
    })
    this.tip = options.tip
    const { addConfirmButtonText, editConfirmButtonText, copyConfirmButtonText } = options
    this.dialogConfirmButtonText = computed(() => {
      return this.type.value === EditDialogType.ADD || this.type.value === EditDialogType.SUBLEVEL
        ? addConfirmButtonText ?? '创建'
        : this.type.value === EditDialogType.EDIT
          ? editConfirmButtonText ?? '保存'
          : copyConfirmButtonText ?? '复制'
    })
    this.openCallBack = options.openCallBack
    this.refresh = options.refresh
  }

  readonly width = ref('550px')
  public confirm: CreateEditDialogOptions<T>['confirm']
  public closeCallback?: CreateEditDialogOptions<T>['closeCallback']
  public openCallBack?: CreateEditDialogOptions<T>['openCallBack']
  public refresh?: CreateEditDialogOptions<T>['refresh']

  readonly title: ComputedRef<string>
  readonly tip: string | undefined
  readonly dialogConfirmButtonText: ComputedRef<string>

  public show = ref(false)
  public updateId = ref<number>()
  public type = ref(EditDialogType.ADD)

  public open = (options: ShowDialogOptions<T>) => {
    this.show.value = true
    this.type.value = options.type ? options.type : EditDialogType.ADD
    nextTick(() => {
      this.openCallBack &&
        this.openCallBack({
          data: cloneDeep<any>(options.data),
          type: options.type ?? EditDialogType.ADD
        })
    })
  }
  readonly _confirm = async () => {
    this.confirm(this.type.value).then(() => {
      this.show.value = false
      this.closeCallback && this.closeCallback()
      this.refresh?.()
    })
  }
  public Dialog: FunctionalComponent = (props, { slots }) => {
    return (
      <ElDialog
        closeOnClickModal={false}
        v-model={this.show.value}
        width={this.width.value}
        onClose={this.closeCallback}
        class={s.dialog}
        draggable
      >
        {{
          header: () => <div class={'el-dialog__title'}>{this.title.value}</div>,
          default: () => (
            <>
              {this.tip && (
                <div>
                  <vab-icon icon="error-warning-fill" style="color: #fca439" />
                  <span style="margin-left: 1px; color: #9a9a9a">{this.tip}</span>
                </div>
              )}
              {slots.default?.()}
            </>
          ),
          footer: () => (
            <>
              <ElButton onClick={() => this._confirm()} type="primary">
                {this.dialogConfirmButtonText.value}
              </ElButton>
              <ElButton class="mr-10px" onClick={() => (this.show.value = false)}>
                取消
              </ElButton>
            </>
          )
        }}
      </ElDialog>
    )
  }
  public DialogEdit = this.Dialog
}
