/// <reference types="vite/client" />


interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  
 
// Adicione aqui outras variáveis de ambiente que você usa
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}