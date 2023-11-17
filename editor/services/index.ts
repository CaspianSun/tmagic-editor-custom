import { defs as commonDefs, common } from './common';

import { defs as agentDefs, agent } from './agent';

(window as any).defs = {
  common: commonDefs,
  agent: agentDefs,
};
(window as any).API = {
  common,
  agent,
};
