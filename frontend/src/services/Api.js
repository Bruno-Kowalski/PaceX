import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080',
});

// Interceptor da IDA: Adiciona o token JWT em todas as requisições
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Interceptor da VOLTA: Vigia as respostas do backend
api.interceptors.response.use(
  (response) => {
    // Se deu tudo certo, só repassa a resposta para frente
    return response;
  },
  (error) => {
    // Se o backend avisar que deu erro 401 (Não Autorizado)
    if (error.response && error.response.status === 401) {
      console.warn('Sessão expirada ou usuário apagado do banco. Deslogando...');
      
      // Limpa o token "morto" do navegador
      localStorage.removeItem('token');
      
      // Redireciona o usuário para a tela de login (ajuste a rota se a sua for diferente)
      window.location.href = '/login';
    }
    
    // Repassa o erro para que o seu componente React possa tratá-lo se quiser
    return Promise.reject(error);
  }
);

export default api;