import { useState, useEffect } from 'react';
import { Container, Paper, Text, Button } from '@mantine/core';
import { useLocalStorageValue } from '@mantine/hooks';

const COOKIE_CONSENT_KEY = 'gdpr_cookie_consent';

const CookieConsent = (props) => {
  const [consent, setConsent] = useLocalStorageValue({ key: COOKIE_CONSENT_KEY });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!consent) {
      setVisible(true);
    }
  }, [consent]);

  const handleAccept = () => {
    setConsent(true);
    setVisible(false);
  };

  if (!visible) return null;

  return (
   <>
     <Paper
     
      sx={{ borderTopLeftRadius: 0, borderTopRightRadius: 0, position: 'fixed', bottom: 0, left: 0, zIndex: 1000, width: '100%', borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
    >
      <Container size="xl" sx={{display: "flex", padding: "1vh 2vw", justifyContent: "space-around", alignItems: "center"}}>
        <Text>
          Máme rádi 🍪 aby jsme mohli náš web přizpůsobit pro vás.{' '}
          <a href="https://static.googleusercontent.com/media/www.google.com/cs//intl/en/policies/privacy/google_privacy_policy_en.pdf" target="_blank" rel="noopener noreferrer">
            Zásady ochrany osobních údajů
          </a>
          .
        </Text>
        <Button onClick={handleAccept} color="green" marginTop="md">
          Souhlasím
        </Button>
      </Container>
    </Paper>
    {props.children }
   </>
  );
};

export default CookieConsent;
