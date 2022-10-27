import type { JSON } from '../helpers';

// TODO #4 Enhance key-types for 'can_evaluate' / execution_condition (rule expression)
export type RuleExpression = { [K in string]: JSON };
