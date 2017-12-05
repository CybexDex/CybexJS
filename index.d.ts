declare module "cybexjs" {
  
  type ParamsOfCheck = {
    accountName: string;
    password: string
    auths: {[x: string]: [string, number][]}
  };
  class AccountLogin {
    checkKeys: (paramsToCheck: ParamsOfCheck) => boolean;
    generateKeys(accountName: string, password: string, roles?: string[], prefix?: string): any;
    signTransaction(tr: any): void;
  }
  const Login: AccountLogin;
  class ChainStoreClass {
    resetCache(): void;
    init: () => Promise<any>;
    subscribe(handler: (obj: object) => any): void;
    unsubscribe(handler: (obj: object) => any): void;
    getObject(id: string): any;
    getAccount(name_or_id: string, autosubscribe?: boolean): any;
  }
  const ChainStore: ChainStoreClass;
  const TransactionBuilder: any;
  const FetchChain: (apiMethod: string, ...args: any[]) => Promise<any>;
  const TransactionHelper: any;
  const Aes: any;
  const PublicKey: any;
  const key: {
    addresses(pubkey: any): string[]
  };
}