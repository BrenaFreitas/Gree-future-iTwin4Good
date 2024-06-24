export interface DeviceData {
    [index: string]: any;
  }
  
  export class DeviceStatusApi {
    public static async getData(): Promise<DeviceData[]> {
      // Caminho para o arquivo JSON local na pasta public
      const filePath = './data.json';
  
      try {
        // Usa a API Fetch para ler o conteúdo do arquivo JSON
        const response = await fetch(filePath);
        if (!response.ok) {
          throw new Error('Erro ao buscar o arquivo JSON');
        }
  
        // Converte o conteúdo para objeto JavaScript
        const jsonData: DeviceData[] = await response.json();
  
        return jsonData;
      } catch (error) {
        console.error('Erro ao ler o arquivo JSON:', error);
        return []; // Retorna um array vazio em caso de erro
      }
    }
  }
  