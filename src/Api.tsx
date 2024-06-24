import fs from 'fs'; // Importe o módulo 'fs' para manipulação de arquivos (Node.js)

export interface DeviceData {
    [index: string]: any;
}

export class DeviceStatusApi {
    public static async getData(): Promise<DeviceData[]> {
        // Caminho para o arquivo JSON local
        const filePath = './data.json';

        try {
            // Lê o conteúdo do arquivo JSON
            const data = fs.readFileSync(filePath, 'utf-8');

            // Converte o conteúdo para objeto JavaScript
            const jsonData: DeviceData[] = JSON.parse(data);

            return jsonData;
        } catch (error) {
            console.error('Erro ao ler o arquivo JSON:', error);
            return []; // Retorna um array vazio em caso de erro
        }
    }
}
