import { type CredentialSource } from './detect-credentials.js';
import type { SessionFileStatus } from './session-files.js';
import { type BillingStatus } from './managed-client.js';
export interface DoctorReport {
    extensionConnected: boolean;
    relayReachable: boolean;
    credentials: CredentialSource[];
    recentSessions: SessionFileStatus[];
    apiReachable: boolean;
    billing: BillingStatus | null;
}
export declare function runDoctor(): Promise<DoctorReport>;
export declare function renderDoctorReport(r: DoctorReport): string;
