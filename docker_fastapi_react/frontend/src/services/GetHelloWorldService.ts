import { ApiService } from './ApiService';

// TODO: レスポンスの型を別ファイルで定義する
export interface IMessageResponse {
    message: string;
}

/**
 * マスタ初期化サービス
 */
export class MessageService {
    /**
     * メニューマスタ初期化
     */
    public static async getMessage(): Promise<string> {
        // マスタ初期化APIを呼び出す
        const massageResponse: IMessageResponse =
            await ApiService.callGetApi<IMessageResponse>('/');
        console.log(massageResponse);
        return massageResponse.message;
    }
}
