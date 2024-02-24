import {useTranslations} from 'next-intl';

 const ContactPage = () => {
  const t = useTranslations();
  return (
    <div>
      {/* <h1 className='text-xl'>{t("Home.title")}</h1> */}
      Contact
    </div>
  );
}

export default ContactPage;
