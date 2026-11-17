import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-gray-300 px-4 md:px-[6%] py-8 md:py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
        <div>
          <h3 className="text-primary text-xl md:text-2xl font-extrabold mb-3 md:mb-4">Brightkey</h3>
          <p className="text-xs md:text-sm">
            {t('hero.subtitle')}
          </p>
        </div>

        <div>
          <h4 className="text-white font-bold mb-3 md:mb-4 text-sm md:text-base">{t('footer.company')}</h4>
          <ul className="space-y-2 text-xs md:text-sm">
            <li>
              <Link to="/about" className="hover:text-primary transition-colors">
                {t('footer.aboutUs')}
              </Link>
            </li>
            <li>
              <Link to="/agents" className="hover:text-primary transition-colors">
                {t('nav.agents')}
              </Link>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                {t('footer.careers')}
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                {t('footer.blog')}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-3 md:mb-4 text-sm md:text-base">{t('footer.resources')}</h4>
          <ul className="space-y-2 text-xs md:text-sm">
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                {t('footer.buyGuide')}
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                {t('footer.sellGuide')}
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                {t('footer.faq')}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-3 md:mb-4 text-sm md:text-base">{t('footer.contact')}</h4>
          <ul className="space-y-2 text-xs md:text-sm">
            <li>
              <a href="mailto:info@brightkey.fictional" className="hover:text-primary transition-colors break-all">
                info@brightkey.fictional
              </a>
            </li>
            <li>
              <a href="tel:+15551234567" className="hover:text-primary transition-colors">
                +1 (555) 123-4567
              </a>
            </li>
            <li className="text-gray-400">
              123 Fictional Street<br />
              Silverton, SV 12345
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 pt-4 md:pt-6 text-center text-xs md:text-sm">
        <p>© {currentYear} {t('footer.copyright')}</p>
      </div>
    </footer>
  );
};

export default Footer;
