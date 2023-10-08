import { IFetcher } from "../interface";
import fetch from 'isomorphic-unfetch';

export class TextFetcher implements IFetcher<string, string> {
    async doFetch(query: string): Promise<string> {
        let response = await this.internalFetch(query);

        while (response.status === 202) {
            await this.delay(6000);

            response = await this.internalFetch(query);
        }

        const buffer = await response.arrayBuffer();

        const decoder = new TextDecoder('iso-8859-1');
        
        const text = decoder.decode(buffer);

        // return response.text();

        return text;
    }

    async internalFetch(query: string): Promise<any> {
        const response = await fetch(query);

        return response;
    }
    async delay(waitFor: number): Promise<any> {
        return new Promise((resolve) => {
            setTimeout(resolve, waitFor);
        });
    }
}