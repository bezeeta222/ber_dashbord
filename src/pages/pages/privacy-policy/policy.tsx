// material-ui
import { styled, useTheme } from '@mui/material/styles';
import { Container, Grid, Typography, Stack } from '@mui/material';
import Link from '@mui/material/Link';

// project imports
import AppBar from 'ui-component/extended/AppBar';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

// assets
const headerBackground = '/assets/images/landing/header-bg.jpg';

const HeaderWrapper = styled('div')(({ theme }) => ({
  backgroundImage: `url(${headerBackground})`,
  backgroundSize: '100% 600px',
  backgroundAttachment: 'fixed',
  backgroundRepeat: 'no-repeat',
  textAlign: 'center',
  paddingTop: 30,
  [theme.breakpoints.down('md')]: {
    paddingTop: 0
  }
}));

// ============================|| SAAS PAGES - PRIVCY POLICY ||============================ //

const PrivacyPolicy = () => {
  const theme = useTheme();

  return (
    <HeaderWrapper>
      <AppBar />
      <Container>
        <Grid container justifyContent="center" spacing={gridSpacing}>
          <Grid item sm={10} md={7} sx={{ mt: { md: 12.5, xs: 2.5 }, mb: { md: 8, xs: 2.5 } }}>
            <Grid container spacing={gridSpacing}>
              <Grid item xs={12}>
                <Typography
                  variant="h1"
                  color="white"
                  component="div"
                  sx={{
                    fontSize: '3.5rem',
                    fontWeight: 900,
                    lineHeight: 1.4,
                    [theme.breakpoints.down('md')]: { fontSize: '1.8125rem', marginTop: '80px' }
                  }}
                >
                  Privacy Policy
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant="h4"
                  component="div"
                  sx={{ fontWeight: 400, lineHeight: 1.4, [theme.breakpoints.up('md')]: { my: 0, mx: 12.5 } }}
                  color="white"
                >
                  Last updated on 18th Feb 2022
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <MainCard elevation={4} border={false} boxShadow shadow="4" sx={{ mb: 3 }}>
              <Stack spacing={2} sx={{ textAlign: 'left' }}>
              <p style={{ textAlign: 'justify' }}>
        (a) This is the privacy policy (“Privacy Policy”) of Xamble Technologies
        Sdn Bhd and its subsidiaries, affiliates, brands, related and/or
        associated companies/brands and jointly controlled entities (including
        all of their shareholder(s), director(s), employee(s), supplier(s),
        contractor(s) and/ or permitted person(s)). These entities are
        collectively referred to as “Xamble Tech”, “we”, “us” or “our”. Xamble
        Tech is committed to respecting and protecting your privacy online. This
        Privacy Policy explains our practices regarding the collection, use,
        disclosure and transfer of your personal data.
        <br />
        <br /> (b)
        ThisPrivacyPolicyisincorporatedaspartoftheXambleTech’sTermsofService.Youraccess
        to the Platform and/or use of the Service is subject to the Terms of
        Service and this Privacy Policy. Unless specifically defined in this
        Privacy Policy, the defined terms shall have the same meaning as defined
        in the Terms of Service.
        <br />
        <br />
        (c) To process, administer and/or manage your relationship with us, we
        will necessarily need to collect, use, disclose and/or process your
        personal data. This Privacy Policy applies to personal data about you
        and/or individuals provided by you, possessed by us or that we obtain
        about you, whether now or in the future. We will only process your
        personal data in accordance with the prevailing personal data protection
        and privacy laws of the countries we operate in and this Privacy Policy.
        <br />
        <br /> (d)
        Ifyouareacompany,anentityoranorganisation,referencestotheterm“you”and“your”shall
        also include your employees, independent contractors, representatives
        and agents.
        <br />
        <br /> (e) By accessing, browsing, downloading and/or using our Platform
        and/or Service, or by dealing with us, you acknowledge that you have
        read and understood this Privacy Policy and agree to us processing your
        personal data in accordance with the manner set out in this Privacy
        Policy, as may be amended from time to time.
        <br />
        <br /> (f) We may revise or update this Privacy Policy at any time by
        posting a revised/an updated version on the Platform. Unless stated
        otherwise, any revision or update takes effect immediately. Your
        continued access and/or use of our Platform and/or Service or dealing
        with us after a revision or update to this Privacy Policy constitutes
        your binding acceptance of the revised or updated Privacy Policy.
        <br />
        <br /> (g) It is necessary for us to collect and process your personal
        data. If you do not provide us with your personal data, or do not
        consent to this Privacy Policy or any amendments to this Privacy Policy,
        we may not be able to render all Services to you and you may be required
        to terminate your relevant agreement with us and/or stop accessing or
        using the Platform and/or Service.
        <br />
        <br /> (h) The original of this Privacy Policy is written in English
        language. In the event of any conflict between the English and the
        Bahasa Malaysia version, the English version shall prevail.
      </p>
      <h2 style={{ textAlign: 'center' }}>2. COLLECTION OF PERSONAL DATA</h2>
      <p style={{ textIndent: '50px', textAlign: 'justify' }}>
        (a) The term “personal data” means any information, whether recorded in
        a material form or not, and with other information, from which a person
        (including employees, independent contractors, representatives and
        agents of a company, entity or an organisation) is identified or
        identifiable.
        <br />
        <br /> (b) We may collect the following personal data from you:
        <br />
        <br /> (i) Identity data, such as your name, nationality, gender, date
        of birth, biometric data, image;
        <br />
        <br /> (ii) Contact data, such as billing address, delivery address,
        email address and phone number(s);
        <br />
        <br /> (iii) Account data, such as bank and credit/debit card details,
        e-wallets, payment details, financial information and employment
        information;
        <br />
        <br /> (iv) Sensitive personal data, such as your physical or mental
        health or condition, your political opinions, your religious beliefs or
        other beliefs or a similar nature, the commission or alleged commission
        by him of any offence or any other personal data as the ministry in
        charge of such matters may determine by order published in the Gazette.
        For the purpose of this clause, “Gazette” means the official Gazette of
        the Federation and shall, to the extent specified in subsection 18(3),
        include the official Gazette of any state;
        <br />
        <br /> (v) Transaction data, such as payment manners, details about
        payments to and from you and other details of services you have engaged
        with us or through us;
        <br />
        <br /> (vi) Technical data, such as internet protocol (IP) address, your
        login data, browser type and version, time zone setting and location,
        browser plug-in types and versions, operating system and platform,
        mobile carrier, URLs and other technology(ies) on the devices you use to
        access the Platform and/or Service;
        <br />
        <br /> (vii)
        UserProfiledata,suchasyourusername,yourinterests,preferences,ratesandcontents
        in your newsfeed;
        <br />
        <br /> (viii) Usage data, such as information on how you use the
        Platform and/or the Services; and/or
        <br />
        <br /> (ix) Marketing and communications data, such as your preferences
        in receiving marketing from us and our third parties and your
        communication preferences. The types of personal data collected depend
        on the purpose(s) of collection. We may process your personal data by
        way of collecting, recording, altering, holding, storing, transferring,
        erasing, correcting, retrieving, destructing, aligning, combining,
        disclosing and/or deleting it.
        <br />
        <br /> (c)
        Yourpersonaldatamaybecollectedfromyouduringyourcourseofdealingwithusinanyway
        or manner, regardless online or offline, including pursuant to any
        transactions and/or communications made from/with us. We may also
        collect your personal data from a variety of sources, including without
        limitation in the following situations:
        <br />
        <br /> (i) When you register for an Account with us;
        <br />
        <br /> (ii) When you contact us through our customer service chat;
        <br />
        <br /> (iii) When you submit any forms to us, including (but not limited
        to) application or registration form;
        <br />
        <br /> (iv) When you use any of the features or function available on
        the Platform and/or Services;
        <br />
        <br /> (v) When you use our products, services or marketing collaterals;
        <br />
        <br /> (vi) When you participate in a meeting, event, activity,
        campaign, contest or promotional activity;
        <br />
        <br /> (vii)
        Whenyoufollow,likeorreacttotheXambleTech’ssocialmediapages;and/or
        <br />
        <br /> (viii) Other publicly available sources and directories.
        <br />
        <br /> (d) In addition, we may also receive, store, and process your
        personal data which are provided or made available by any third parties
        whom you have authorised, credit reference/reporting bodies, regulatory
        and law enforcement authorities, for reasons including delivery of our
        Services, performance of conditions of agreements and/or to comply with
        our legal and regulatory obligations.
        <br />
        <br /> (e) You must only submit personal data which is accurate and not
        misleading, and you must keep it up to date and inform us of changes.
        Unless we are informed of the changes, Xamble Tech shall assume that all
        personal data that is provided / last updated shall be true and
        accurate. We shall have the right to request for documentation to verify
        the personal data provided by you as part of our verification processes.
        <br />
        <br /> (f) If you provide personal data of any third party to us, you
        represent and warrant that you have duly obtained the necessary consent
        from that third party to share and transfer his/her personal data to us,
        and for us to collect, use and disclose that data in accordance with
        this Privacy Policy.
      </p>
      <h2 style={{ textAlign: 'center' }}>
        3. PURPOSE OF ACQUIRING AND PROCESSING YOUR PERSONAL DATA
      </h2>
      <p style={{ textIndent: '50px', textAlign: 'justify' }}>
        (a) The personal data as provided/furnished by you to us or collected by
        us from you or through such other sources as may be necessary for the
        fulfilment of the purposes at the time it was sought or collected, may
        be processed for the following purposes (collectively referred to as the
        “Purposes”): Where you are a Xamble Tech’s User:
        <br />
        <br /> (i) to register and administer your Account with us;
        <br />
        <br /> (ii) to process, manage or verify your identity;
        <br />
        <br /> (iii) to provide, maintain and improve the Platform and/or
        Services to you;
        <br />
        <br /> (iv) to deal with or facilitate customer service, carry out your
        instructions, deal with or respond to any enquiries, requests or
        complaints given by (or purported to be given by) you or on your behalf;
        <br />
        <br /> (v) to contact you or communicate with you via our preferred
        communication platform, but not limited to our Platform’s chat, voice
        call, text message, Twitter and/or fax message, email and/or postal mail
        or otherwise for the purpose of administering and/or managing your
        relationship with us or your use of our Services, such as but not
        limited to communicating administrative information to you relating to
        our Services. You acknowledge and agree that such communication by us
        could be by way of the mailing of correspondence, notices to you, which
        could involve disclosure of certain personal data about you to bring
        about delivery of the same;
        <br />
        <br /> (vi) to personalise and improve your user experience with the
        Platform and/or Services;
        <br />
        <br /> (vii) to conduct internal marketing analysis, user profiling
        activities, analysis of user patterns and choices, usage and activity
        trends analysis in relation to the Platform and/or Services and our
        users’ demographics (on an anonymised basis);
        <br />
        <br /> (viii) to carry out due diligence or other screening activities
        (including, without limitation, background checks) in accordance with
        legal or regulatory obligations or our risk management procedures that
        may be required by law or that may have been put in place by us;
        <br />
        <br /> (ix) to protect and/or enforce our legal rights and interests,
        including defending any claim;
        <br />
        <br /> (x) to comply with our legal and regulatory obligations under the
        applicable laws, legislation, regulations or court orders;
        <br />
        <br /> (xi) to comply with or as required by any request or direction of
        any governmental/law enforcement authorities or responding to requests
        for information from public agencies, ministries, statutory bodies or
        other similar authorities;
        <br />
        <br /> (xii) to detect, investigate and prevent any suspicious
        transaction, fraud, prohibited or illegal activities, omission,
        misconduct or misuse of the Platform and/or Service, whether relating to
        your use of our Platform and/or Services or any other matter arising
        from your relationship with us, and whether or not there is any
        suspicion of the aforementioned;
        <br />
        <br /> (xiii) to transfer or assign our rights, interests and
        obligations under any agreements entered into with us;
        <br />
        <br /> (xiv) for internal administrative and updating purpose, such as
        auditing, data analysis, record keeping, contact lists, risk management,
        security, etc;
        <br />
        <br />
        (xv) for our storage, hosting back-up (whether for disaster recovery or
        otherwise) of your personal data, whether within or outside your
        country,
        <br />
        <br />
        (xvi) to conduct automated-decision making processes in accordance with
        any of these purposes;
        <br />
        <br />
        (xvii)
        foroperationalpurposesorsomeotherpurposesthatisdeemednecessaryforoperation;
        and/or
        <br />
        <br /> (xviii) any other purposes which we notify you of at the time of
        obtaining your consent; and you agree and consent to us using and
        processing your personal data for the Purposes as identified in this
        Privacy Policy.
        <br />
        <br />
        (b) We may also use and process your personal data for the following
        marketing and promotional purposes (“Marketing and Promotional
        Purposes”):
        <br />
        <br />
        (i) to send you information, alerts, push-notifications, newsletter,
        updates, promotional materials, special privileges, announcement on
        services, upcoming events or campaigns offered/organised by us, and/or
        our selected third parties which may be of interest to you;
        <br />
        <br />
        (ii) to send you seasonal/festive greetings or messages;
        <br />
        <br />
        (iii) to notify and invite you to events or activities organised by us
        and/or our selected third parties which may be of interest to you;
        <br />
        <br />
        (iv) to process your registration to participate in or attend an event
        and to communicate with you regarding your attendance at the event;
        and/or
        <br />
        <br />
        (v) to share your personal data within our organisation and our selected
        third parties who may communicate with you to market their services from
        time to time by SMS, phone call, email, fax, mail, social media and/or
        any other appropriate communication channels. You have the right at any
        time to request us to stop sending you any marketing and promotional
        materials or contacting you for Marketing and Promotional Purposes. You
        may also click on the “Unsubscribe” link embedded in the relevant
        marketing and promotional email in order not to receive any marketing
        and promotional email in the future. If you unsubscribe, we may still
        send you non-marketing and promotional communications, such as those
        about your Account, about the Platform and/or Services or our other
        ongoing business relations.
        <br />
        <br /> You have the right at any time to stop push-notifications from us
        by changing the settings on your devices.
        <br />
        <br /> (c)
        IfyouareaUser,youruserprofileinformationsuchasyourusernameore-mailwillbeusedto
        identify you when you use the Platform and/or Services. Your username
        may be displayed to other users when you submit your application. We
        will not directly disclose or share your user email address and other
        information without your consent.
        <br />
        <br />
        (d)
        Wemayalsouse,process,andsharenon-personallyidentifiable,aggregated,statisticaland/or
        anonymous data with third parties for data analytics and to analyse and
        develop our marketing strategy and further improve and enhance the
        Platform and/or Services.
        <br />
        <br />
        (e) You agree and consent to us using and processing your personal data
        for the Purposes as identified in this Privacy Policy.
        <br />
        <br />
        (f) We will seek your separate consent for any other purposes which do
        not fall within the categories stated above.
      </p>
      <h2 style={{ textAlign: 'center' }}>
        4. CONSEQUENCES OF NOT CONSENTING TO THIS PRIVACY POLICY / NOT PROVIDING
        YOUR PERSONAL DATA
      </h2>
      <p style={{ textIndent: '50px', textAlign: 'justify' }}>
        The collection of your personal data by us may be mandatory or voluntary
        in nature depending on the Purposes for which your personal data is
        collected. Where it is mandatory for you to provide us with your
        personal data, and you fail or choose not to provide us with such data,
        or do not consent to the above or this Privacy Policy, we will not be
        able to provide our Platform and/or Services to you or engage you to
        provide services to us or on our behalf or issue payments to you for the
        services provided (if you are our business/marketing partner,
        Creator/Seller or third party service providers).
      </p>
      <h2 style={{ textAlign: 'center' }}>
        5. DISCLOSURE OF YOUR PERSONAL DATA
      </h2>
      <p style={{ textIndent: '50px', textAlign: 'justify' }}>
        We will not sell, rent, transfer or disclose any of your personal data
        to any third party without your consent. However, we may disclose some
        of your personal data to the following third parties, for one or more of
        the above Purposes:
        <br />
        <br /> (a) our subsidiaries, related and/or associated companies;
        <br />
        <br /> (b) your immediate family members and/or emergency contact person
        as may be notified to us from time to time;
        <br />
        <br /> (c) successorsintitletous;
        <br />
        <br /> (d) Creator/Seller and our selected third parties;
        <br />
        <br /> (e) any person under a duty of confidentiality to which has
        undertaken to keep your personal data confidential which we have engaged
        to discharge our obligations to you;
        <br />
        <br /> (f) any party in relation to legal proceedings or prospective
        legal proceedings;
        <br />
        <br /> (g) auditors, consultants, lawyers, accountants or other
        financial or professional advisers appointed in connection with our
        business on a strictly confidential basis, appointed by us to provide
        services to us; any party nominated or appointed by us either solely or
        jointly with other service providers, who provide services or conduct
        data processing on our behalf or for data centralization and/or
        logistics purposes;
        <br />
        <br /> (h) data centres and/or servers located within or outside your
        country for data storage purposes;
        <br />
        <br /> (i) storage facility and records management service providers;
        <br />
        <br /> (j) government agencies, law enforcement agencies, courts,
        tribunals, regulatory/professional bodies, industry regulators,
        ministries, and/or statutory agencies or bodies, offices or municipality
        in any country, if required or authorised to do so, to satisfy any
        applicable law, regulation, order or judgment of a court or tribunal or
        queries from the relevant authorities;
        <br />
        <br /> (k)
        creditreference/reportingagenciesforthepurposeofcreditcheckingonyou;
        <br />
        <br /> (l) our business/marketing partners, third party product and/or
        service providers, brands or agents, on a need to know basis, that
        provide related services in connection with our business on our behalf
        or to assist us with the provision of the Platform and/or Service to
        you;
        <br />
        <br /> (m) insurance companies for the purpose of applying and obtaining
        insurance policy(ies), if necessary;
        <br />
        <br />
        (n) financial institutions for the purpose of applying and obtaining
        credit facility(ies), if necessary;
        <br />
        <br /> (o) banks and financial institutions, merchants and credit/debit
        card companies in connection with your commercial transactions with us;
        <br />
        <br /> (p) the general public when you participate in our events or
        activities, successfully chosen for an application and/or review or
        other features of the Platform and/or Services that are viewable by the
        general public without compensation for advertising and publicity
        purposes;
        <br />
        <br /> (q) any third party (and its advisers/representatives) in
        connection with any proposed or actual reorganization, merger, sale,
        consolidation, acquisition, joint venture, assignment, transfer, funding
        exercise or asset/share sale relating to all or any portion of our
        business or in the unlikely event of insolvency, bankruptcy or
        receivership; and/or
        <br />
        <br /> (r) any other person reasonably requiring the same in order for
        us to operate and maintain our business or carry out the activities set
        out in the Purposes or as instructed/authorised by you.
      </p>
      <h2 style={{ textAlign: 'center' }}>6. ACCURACY OF YOUR PERSONAL DATA</h2>
      <p style={{ textIndent: '50px', textAlign: 'justify' }}>
        We take it that all personal data provided by you is accurate and
        complete, and that none of it is misleading or out of date. You will
        promptly update us in the event of any change to your personal data.
        Please note that your failure to maintain accurate, complete and
        up-to-date personal data may result in your inability to access and use
        the Platform and/or Services.
      </p>
      <h2 style={{ textAlign: 'center' }}>7. YOUR RIGHTS</h2>
      <p style={{ textIndent: '50px', textAlign: 'justify' }}>
        <br />
        <br /> (a) To the extent that the prevailing personal data protection
        and privacy laws of the countries we operate in allow, you have the
        right to request for access to, request for a copy of, request to update
        or correct, your personal data held by us. We may charge a small fee
        (such amount as permitted under the applicable law) to cover the
        administration costs involved in processing your request to access your
        personal data. Notwithstanding the foregoing, we reserve our rights to
        rely on any statutory exemptions and/or exceptions to collect, use and
        disclose your personal data.
        <br />
        <br /> (b) In addition, you also have the right, by notice in writing,
        to inform us on your withdrawal (in full or in part) of your consent
        given previously to us subject to any applicable legal restrictions,
        contractual conditions and a reasonable duration of time for the
        withdrawal of consent to be effected. However, your withdrawal of
        consent could result in certain legal consequences arising from such
        withdrawal. In this regard, depending on the extent of your withdrawal
        of consent for us to process your personal data, it may mean that we
        will not be able to continue with your existing relationship with us or
        the contract that you have with us will have to be terminated.
        <br />
        <br /> (c) Furthermore, you have the right, by notice in writing, to
        inform us to cease the processing of your personal data or not begin the
        data processing where such processing is causing or is likely to cause
        substantial and unwarranted damage or distress to yourself or another
        person. You are required to prove that the processing of such personal
        data is likely to cause substantial damage (e.g. financial loss) or
        substantial distress (e.g. emotional or mental trauma) to yourself or
        another person and that such damage or distress is or would be
        unwarranted. We are not collecting your personal data as it is a legal
        requirement to not collect such. However, you shall not have the right
        to prevent processing of your personal data if you have given consent to
        the processing or such processing of personal data is necessary (e.g.
        for the performance of a contract to which you are a party, for
        compliance with any legal obligation to which the data user is the
        subject).
        <br />
        <br />
        (d) For the purposes of direct marketing, you have the right to require
        us to either cease or not begin the processing of your personal data, by
        notice in writing. However, in the following circumstances, we are
        permitted to conduct direct marketing to you: (a) if we obtained your
        consent; (b) for the collection of your personal data for provision of
        services; (c) if you are informed of the identity of direct marketing
        organisations and the purpose of collection and disclosure; (d) in the
        event the services offered to you from us is similar to the product and
        services generally provided by us; or (e) in the event we are committed
        to providing an opt-out option for you during the collection of personal
        data. You may correct, update or delete your personal data at any time
        by editing your profile on the “Account Settings” page on the Platform.
        However, please note that your personal data may be retained on our
        back-up systems for some time.
      </p>
      <h2 style={{ textAlign: 'center' }}>
        8. RETENTION OF YOUR PERSONAL DATA
      </h2>
      <p style={{ textIndent: '50px', textAlign: 'justify' }}>
        {' '}
        Any of your personal data provide to us is retained for as long as the
        purposes for which the personal data was collected continues; your
        personal data is then permanently destroyed in the event your personal
        data is no longer required for the said purposes unless its further
        retention is required to satisfy a longer retention period to meet our
        operational, legal, regulatory, tax, audit or accounting requirements.
      </p>
      <h2 style={{ textAlign: 'center' }}>9. SECURITY OF YOUR PERSONAL DATA</h2>
      <p style={{ textIndent: '50px', textAlign: 'justify' }}>
        <br />
        <br /> (a) We are committed to ensuring that your personal data is
        stored securely. In order to prevent unauthorised access, disclosure or
        other similar risks, we endeavour, where commercially practicable, to
        implement appropriate technical, physical, electronic and procedural
        security measures in accordance with the applicable laws and regulations
        and industry standard to safeguard against and prevent the unauthorised
        or unlawful processing of your personal data and the destruction of, or
        accidental loss, damage to, alteration of, unauthorised disclosure of or
        access to your personal data.
        <br />
        <br /> (b) We will make reasonable updates to our security measures from
        time to time and ensure the authorised third parties only use your
        personal data for the Purposes set out in this Privacy Policy.
        Notwithstanding this, we cannot and shall not be held responsible for
        such third parties actions or inactions in relation to your personal
        data.
        <br />
        <br /> (c)
        TheInternetisnotasecuremedium.However,wewillputinplacevariousreasonablesecurity
        procedures with regard to the Platform and your electronic
        communications with us. All our employees and data processors, who have
        access to, and are associated with the processing of your personal data,
        are obliged to respect the confidentiality of your personal data.
        <br />
        <br /> (d) Unfortunately, no data transmission over the Internet or any
        wireless network can be guaranteed to be 100% secured. While we take
        commercially practical steps to protect your personal data, we cannot
        and do not accept responsibility for any unauthorised access, unlawful
        interceptions or loss of personal data transmitted to or from Xamble
        Tech and are not responsible for the actions of any third parties that
        may receive any such personal data.
      </p>
      <h2 style={{ textAlign: 'center' }}>
        10. PERSONAL DATA FROM CHILDREN AND OTHER INDIVIDUALS
      </h2>
      <p style={{ textIndent: '50px', textAlign: 'justify' }}>
        <br />
        <br />
        (a)
        Totheextentthatyouhaveprovided(orwillprovide)personaldataaboutyourfamilymembers,
        spouse, other dependents (if you are an individual), directors,
        shareholders, employees, representatives, agents (if you are a
        corporate, an entity or an organisation) and/or other individuals, you
        confirm that you have explained to them that their personal data will be
        provided to, and processed by, us and you represent and warrant that you
        have obtained their consent to the processing (including disclosure and
        transfer) of their personal data in accordance with this Privacy Policy.
        <br />
        <br />
        (b) In respect of children (i.e. individuals under the age of 18 or the
        legal age for giving consent pursuant to the applicable laws in your
        country) or individuals not legally competent to give consent, you
        confirm that you are the parent or legal guardian or person who has
        parental responsibility over them or the person appointed by court to
        manage their affairs or that they have appointed you to act for them, to
        consent on their behalf to the processing (including disclosure and
        transfer) of their personal data in accordance with this Privacy Policy.
      </p>
      <h2 style={{ textAlign: 'center' }}>
        11. TRANSFER OF YOUR PERSONAL DATA OUTSIDE OF YOUR COUNTRY
      </h2>
      <p style={{ textIndent: '50px', textAlign: 'justify' }}>
        Our information, technology, storage, facilities, and servers may be
        located in other countries outside of your country.This may include, but
        not limited to, instances where your personal data may be stored on
        servers located outside of your country.In addition, your personal data
        may be disclosed or transferred to entities located outside your
        country.Please note that these foreign entities may be established in
        countries that might not offer a level of data protection that is
        equivalent to that offered in your country under the applicable laws in
        your country.You hereby expressly consent to us transferring your
        personal data outside of your country for such purposes.{' '}
      </p>
      <h2 style={{ textAlign: 'center' }}>
        12. INTERNET AND MOBILE APPLICATION USE
      </h2>
      <p style={{ textIndent: '50px', textAlign: 'justify' }}>
        <br />
        <br /> (a) You acknowledge that the provision of your personal data to
        us over the Internet is entirely at your own risk.
        <br />
        <br /> (b) You further acknowledge that if you upload / post any
        contents on your profile it will become public information and will be
        retained by us even after your account has been terminated.
        <br />
        <br /> (c)
        IfanypartofthePlatformlinksyoutootherwebsites,thosewebsitesdonotoperateunderthis
        Privacy Policy and we do not accept any responsibility or liability
        arising from those websites. We suggest you read and understand those
        websites’ privacy policy before you provide your personal data to those
        websites.
        <br />
        <br /> (d) We use cookies (an alphanumeric identifier that we transfer
        to your computer’s or mobile device’s hard drive so that we can
        recognise your web browser or mobile device, track your visits to the
        Platform or remember your username and/or password each time log-in) to
        monitor your use of the Platform. All such demographic data collected
        through cookies are not personal data and we may use this data in
        aggregated, statistical and/or anonymised form. You may disable cookies
        by changing the settings on your web browser or mobile device, although
        this may mean that certain features on the Platform will not function
        properly if you set your web browser or mobile device to not accept
        cookies.
        <br />
        <br /> (e) Please note that when you install our mobile application and
        register an Account or log into your Account on your mobile device, we
        will collect and use your personal data, in accordance with this Privacy
        Policy, whenever you activate our mobile application on that mobile
        device. This use includes linking your personal data with your Account.
        Most mobile platforms (iOS, Android, etc) have different permission
        systems for obtaining your consent. The iOS platform will alert you the
        first time our mobile application seeks before you first use the mobile
        application, and your use constitutes your consent.
      </p>
      <h2 style={{ textAlign: 'center' }}>13. CONTACT DETAILS</h2>
      <p style={{ textIndent: '50px', textAlign: 'justify' }}>
        You have the right to request access to and to request correction of
        your personal data. If you have any questions about this Privacy Policy,
        or have any further queries, or would like to make a complaint or data
        access, correction or limitation request in respect of your personal
        data, you may do so by adjusting the settings in your account maintained
        with us or contact us at help@xamble.com.
      </p>
              </Stack>
            </MainCard>
          </Grid>
        </Grid>
      </Container>
    </HeaderWrapper>
  );
};

export default PrivacyPolicy;
