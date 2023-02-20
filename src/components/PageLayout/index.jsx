import { Footer } from '../Footer';
import { 
  Page
} from './style';

export function PageLayout({children}) {
  return(
    <Page>
      {children}
      <Footer />
    </Page>
  );
}