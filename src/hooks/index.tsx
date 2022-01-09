import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/default.theme';

const queryClient = new QueryClient();

const AppProvider: React.FC = ({ children }) => (
    <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </QueryClientProvider>
);

export default AppProvider;
