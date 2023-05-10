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

const PrivacyService = () => {
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
                  Privacy Service
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
              <p style={{ textIndent: '50px', textAlign: 'justify' }}>
        Welcome to the Xamble website https://www.nfttechnologies.co (“Site”)
        and/or Xamble mobile apps (“App”) (collectively, the “Platform”) owned
        and operated by Xamble Technologies Sdn Bhd (“Xamble Tech”, “we”, “us”,
        “our”). [We provide a peer-to-peer web3 membership service that helps
        users discover and directly interact with each other and deal with NFTs
        available on public blockchains (“Dapps”). We do not have custody or
        control over the NFTs or blockchains you are interacting with.]
      </p>
      <p style={{ textIndent: '50px', textAlign: 'justify' }}>
        PLEASE READ THE FOLLOWING TERMS OF SERVICE CAREFULLY SO THAT YOU ARE
        AWARE OF YOUR RIGHTS AND OBLIGATIONS IN RESPECT OF THE ACCESS AND USE OF
        THE PLATFORM AND/OR SERVICES PROVIDED BY US.
      </p>
      <p style={{ textIndent: '50px', textAlign: 'justify' }}>
        BY ACCESSING THE PLATFORM, USING THE SERVICES AND/OR REGISTERING FOR AN
        ACCOUNT WITH US, YOU GIVE YOUR ACCEPTANCE OF AND CONSENT TO THESE TERMS,
        WHICH SHALL INCLUDE THOSE ADDITIONAL TERMS AND CONDITIONS AND POLICIES
        REFERENCED HEREIN AND/OR LINKED HERETO AND/OR IMPOSED BY US FROM TIME TO
        TIME. YOUR ACCEPTANCE OF THESE TERMS SHALL CONSTITUTE LEGALLY BINDING
        AGREEMENT BETWEEN XAMBLE TECH AND YOU AS THE USER. IF YOU DO NOT AGREE
        WITH THESE TERMS, IN WHOLE OR IN PART, PLEASE DISCONTINUE ACCESSING AND
        USING THE PLATFORM, ACCOUNT AND/OR SERVICES IMMEDIATELY.
      </p>
      <h2 style={{ textAlign: 'center' }}>1. INTRODUCTION</h2>
      <p style={{ textIndent: '50px', textAlign: 'justify' }}>
        1.1. The "Services" we provide or make available include [(a) the
        Platform, and any features, software and tools provided or introduced
        from time to time on the Platform; including without limitation using
        the Platform to view and explore non-fungible token (“NFT(s)”) and to
        connect with others to purchase, sell or transfer NFTs on public
        blockchains, to access and keep track of all such other utilities (e.g.
        membership, promotion, voucher and others) that may be associated or
        attached to an NFT or your Account (defined below); and (b) all
        information, linked pages, features, data, text, images, graphics,
        video, messages, tags, content, programming, application services
        (including, without limitation, any mobile application services) or
        other materials made available on or through the Platform or its related
        services ("Content"). Any new features added to or augmenting the
        Services are also subjected to these Terms of Service. These Terms of
        Service shall bind all users who use the Platform and/or any Services
        provided by us such as our customers and/ or consumers (“Users”, “User”,
        “you” or “your”).]
      </p>
      <h2 style={{ textAlign: 'center' }}>2. CAPACITY</h2>
      <p style={{ textIndent: '50px', textAlign: 'justify' }}>
        2.1. Please do not use or access the Platform and/or our Services if you
        are under the age of eighteen (18) or the legal age for giving consent
        pursuant to the applicable laws in your jurisdiction (“Legal Age”). If
        you are below the Legal Age, you must get permission from a parent or
        legal guardian to open an Account and that parent or legal guardian must
        agree to these Terms of Service on your behalf.
      </p>
      <p style={{ textIndent: '50px', textAlign: 'justify' }}>
        2.2. If you are accessing the Platform and/or using our Services on
        behalf of a corporate body, you must ensure that you are duly authorised
        by the corporate body and have the full right and authority to access
        the Platform, open an Account and/or use our Platform or Services on
        behalf of the corporate body in accordance with these Terms of Service.
      </p>
      <h2 style={{ textAlign: 'center' }}>3. TERMS OF SERVICE</h2>
      <p style={{ textIndent: '50px', textAlign: 'justify' }}>
        3.1. This Terms of Service comprises the terms set out here and such
        other policies referenced including but not limited to the Privacy
        Policy and such other policies as may be introduced by us from time to
        time.
      </p>
      <p style={{ textIndent: '50px', textAlign: 'justify' }}>
        {' '}
        3.2. We have provided and published a privacy policy on the Platform
        which sets out our commitments in data protection and our privacy policy
        in detail. Please read the privacy policy carefully to understand how we
        collect and use the information associated with your account and/or your
        use of the services. By using the services or providing information on
        the platform, you consent to our collection, use, disclosure, storage,
        transfer and/or processing of your content and data (including personal
        data) as described in the privacy policy.
      </p>
      <p style={{ textIndent: '50px', textAlign: 'justify' }}>
        3.3. WE MAY AMEND, MODIFY OR UPDATE THESE TERMS OF SERVICE FROM TIME TO
        TIME. ANY CHANGE WE MADE TO THESE TERMS OF SERVICE WILL BE PUBLISHED ON
        THE PLATFORM AND, WHERE APPROPRIATE, NOTIFIED TO YOU BY EMAIL OR VIA THE
        COMMUNICATION CHANNEL MADE AVAILABLE ON THE PLATFORM, WHEREUPON YOUR
        CONTINUED ACCESS TO THE PLATFORM, ACCOUNT THEREAFTER AND/OR USE OF ANY
        OF THE SERVICES SHALL CONSTITUTE YOUR ACKNOWLEDGMENT, ACCEPTANCE AND
        AGREEMENT OF THE CHANGE WE MADE TO THESE TERMS OF SERVICE. PLEASE CHECK
        BACK FREQUENTLY TO SEE ANY UPDATES OR CHANGES TO THESE TERMS OF SERVICE.
      </p>
      <p style={{ textIndent: '50px', textAlign: 'justify' }}>
        3.4. We may at any time or from time to time sub-contract and/or appoint
        our subsidiaries, affiliates, related entities and/or any third party
        service provider(s) to operate the Platform and/or provide the Services
        and/or part thereof on our behalf at our absolute discretion. We shall
        have the rights to delegate, transfer, assign or novate, in whole or in
        part, our rights, benefits or obligations to our subsidiaries,
        affiliates, related entities or appointed third party service
        provider(s) without your consent and/or without notice to you.
      </p>
      <h2 style={{ textAlign: 'center' }}>4. USER ACCOUNT</h2>
      <h3 style={{ textAlign: 'center' }}>Registration of Account</h3>
      <p style={{ textIndent: '50px', textAlign: 'justify' }}>
        4.1. In order to access and enjoy full functions and features of the
        Platform and/or our Services, you are required to create and register
        for an account with us (“Account”) by providing your details, including
        but not limited to your name, email address and a password and accepting
        this Terms of Service. You hereby acknowledge and agree that we may
        conduct checks on you including but not limited to checking with any
        sanctions list.
      </p>
      <p style={{ textIndent: '50px', textAlign: 'justify' }}>
        4.2. In registering with us, you agree to provide or that such
        information provided to us are accurate, current and complete
        information about yourself, and to update that information if it
        changes; if you don't, we have the right to suspend, freeze or cancel
        the use of Account by you. If we rely on the contents of your
        application and accept you as the Platform’s User, you irrevocably agree
        that you shall indemnify and keep us indemnified and hold us harmless
        for any expense, loss or damage that we may suffer arising from any
        inaccurate or false statement or misrepresentation of facts submitted by
        us to you.
      </p>
      <h2 style={{ textAlign: 'center' }}>Security of Account</h2>

      <p style={{ textIndent: '50px', textAlign: 'justify' }}>
        4.3. To safeguard the security of the Platform and your Account, you
        agree to: <br />
        (a) keep your password and/or security code confidential and use only
        your Account, password and/or security code when logging in;
        <br />
        (b) you will take appropriate steps to logout of your Account at the end
        of each visit;
        <br />
        (c) immediately notify us of any unauthorised use of your Account,
        password and/or security code;
        <br />
        (d) ensure that your Account information is accurate and up-to-date;
        <br />
        (e) use your Account only in accordance with the Terms of Service
        published (and updated from time to time) by us through online; and
        <br />
        (f) not use your Account in a manner or for any purposes which may
        detriment and jeopardize Xamble Tech’s operation, interest, reputation
        or goodwill.
        <br />
      </p>
      <p style={{ textIndent: '50px', textAlign: 'justify' }}>
        4.4. You are fully responsible for all activities and transactions that
        occur under your Account even if such activities or transactions were
        not committed by you as we are unable and not obliged to investigate the
        authenticity of user’s identity or authority of such person effecting an
        activity or transaction. We shall not be liable for any direct or
        indirect loss or damage arising from unauthorised use or access of your
        Account or your failure to comply with these Terms of Service.
      </p>
      <p style={{ textIndent: '50px', textAlign: 'justify' }}>
        4.5. For enhancement and improvement purposes, we may from time to time
        conduct software evaluation to assess the performance level of the
        Platform and/or Services. You hereby irrevocably grant to and authorise
        us to conduct periodical review on your Account, including but not
        limited to assessing the activities and/or transactions carried out by
        you on the Platform or via your Account.
      </p>
      <h2 style={{ textAlign: 'center' }}>Identity Verification</h2>
      <p style={{ textIndent: '50px', textAlign: 'justify' }}>
        4.6. We may from time to time require verification of your identity to
        confirm your ownership of your Account. This verification process is
        required for purposes including but not limited to: (i) fulfilling our
        obligations to the relevant authorities to combat against suspicious or
        unlawful activities, anti-money laundering activities and the funding of
        terrorism; (ii) enabling us to take action when unauthorised usage of
        accounts has been detected; and (iii) resolving any disputes relating to
        the ownership of an account.
      </p>
      <p style={{ textIndent: '50px', textAlign: 'justify' }}>
        4.7. You hereby irrevocably authorise us, whether acting on our own or
        through our third party service providers, to make any inquiries and to
        collect any documentation that we consider necessary to verify your
        identity. As part of this verification process, we shall request, and
        you shall provide to us, information about yourself that is true,
        accurate, current and complete, and which can be verified through
        documentation that is legally recognized and accepted in the location in
        which such documentation is issued.
      </p>
      <h2 style={{ textAlign: 'center' }}>5. Xamble WALLET</h2>
      <p style={{ textIndent: '50px', textAlign: 'justify' }}>
        5.1. Upon the registration of an account, a wallet will be created and
        associated to your account (“Xamble Wallet”) to, among others, enable
        you to store the NFTs and its utilities [purchased/acquired] via the
        Platform. A private key will also be created alongside with such
        registration of Account. The private keys necessary to decrypt the
        Xamble Wallet are maintained as a shared function between Xamble Tech
        and you and will be stored with us in the Xamble Wallet. Xamble Tech do
        not have the ability to access the private keys without your
        participation and has no obligation to provide these private keys to
        you.
      </p>
      <p style={{ textIndent: '50px', textAlign: 'justify' }}>
        5.2. You hereby acknowledge that Xamble Wallet is a shared custody
        wallet for holding supported NFTs and utilities created on the Platform.
        You shall be in control of the NFTs held in the Xamble Wallet. When
        storing your NFTs in Xamble Wallet, Xamble Tech does not maintain
        control over the NFTs stored in your Xamble Wallet but will hold the
        private keys on behalf and as authorised by you upon creating an Account
        with us.
      </p>
      <h2 style={{ textAlign: 'center' }}>
        6. FEATURES OF THE ACCOUNT & XAMBLE WALLET
      </h2>
      <p style={{ textIndent: '50px', textAlign: 'justify' }}>
        6.1. The credentials of your Account can be used to access and log in to
        Dapps supported and/or powered by the Platform. You acknowledge that you
        will be subject to a fee charged by us for each transaction made on the
        Dapps. Please refer to Clause 7 below for the fee charges.
      </p>
      <h2 style={{ textAlign: 'center' }}>Purchase of NFTs via the Platform</h2>
      <p style={{ textIndent: '50px', textAlign: 'justify' }}>
        6.2. All sale and purchase of the NFTs on the Platform will be made in
        fiat currency (“Fiat Currency Transaction”). Unless otherwise noted, all
        currency references are in Ringgit Malaysia. You may make purchases of
        NFTs by linking a valid payment method to your Xamble Wallet and you
        authorise us to debit funds using your selected payment method(s) to
        complete your purchase. For the avoidance of doubt, Xamble Tech will
        only deduct the exact amount following the price of the purchase and the
        Xamble Wallet does not offer feature such as storing fiat currency.
      </p>
      <p style={{ textIndent: '50px', textAlign: 'justify' }}>
        {' '}
        6.3. All transactions carried out through the Platform are directed and
        initiated by you and is in no way, controlled by Xamble Tech. When you
        purchase a NFT, you agree to pay for the price (whether listed in
        cryptocurrency or otherwise) for such NFT as displayed on the page,
        including any required gas fees and all applicable taxes (which may
        include sales, services, value added tax and/ or other taxes (by
        whatever name called)) imposed by the local authorities from time to
        time (if not already included in the price of the NFT) and such other
        applicable fee indicated (“Total Fee”).
      </p>
      <p style={{ textIndent: '50px', textAlign: 'justify' }}>
        6.4. We merely act as a facilitator to assist you in the conversion of
        the Fiat Currency Transaction into the form of cryptocurrency supported
        by the Platform (“Supported Cryptocurrency”) for making payment to the
        Creator/Seller, whether on the Platform or on any Dapps, by maintaining
        and facilitating transactions between you and the Creator/Seller. Xamble
        Tech reserves the right to vary the Supported Cryptocurrency available
        to you from time to time. As the NFTs are subject to terms directly
        between buyers and sellers with respect to the use of the NFT content
        and benefits associated (“Purchase Terms”) and we are not a party to
        such agreement between you and the Creator/Seller, we shall not be held
        liable for any disputes arising out of the Purchase Terms. You shall
        ensure that you are aware and have read all terms and conditions
        published by the Creator/Seller before making the purchase.
      </p>
      <p style={{ textIndent: '50px', textAlign: 'justify' }}>
        6.5. You hereby acknowledge that we have no control over, or liability
        for, the delivery, quality, safety, legality or any other aspect of any
        goods or services that you may purchase or receive from, or sell or
        transfer to, any third party. We are not responsible for ensuring that
        the Creator/Seller or any third party buyer/seller you transact with
        whether on the Platform or on any Dapps will complete the transaction or
        is authorised to do so. If you experience a problem with any goods or
        services purchased from, or sold to, any third party whether on the
        Platform or on any Dapps, or if you have a dispute with such third
        party, you should resolve the dispute directly with that third party. If
        you believe that the Creator/Seller has behaved in a fraudulent,
        misleading, or inappropriate manner, or if you cannot adequately resolve
        a dispute with such Creator/Seller, you may notify us at:
        help@xamble.com so that we may consider what action to take, if any.
      </p>
      <p style={{ textIndent: '50px', textAlign: 'justify' }}>
        6.6. You cannot cancel, reverse, or change any transaction marked as
        complete or pending. If your payment is not successful or if your
        payment method has insufficient funds, you authorise us, in our sole
        discretion, either to cancel the transaction or to debit your other
        payment methods, in any amount necessary to complete the transaction.
      </p>
      <p style={{ textIndent: '50px', textAlign: 'justify' }}>
        6.7. In relation to your selected payment mechanism, you represent and
        warrant to be an authorised holder of the selected and eligible Credit /
        Debit card, online banking, selected electronic wallet (e-wallet) or
        other payment method as may be accepted by us from time to time
        (“Payment Method”).
      </p>
      <h2 style={{ textAlign: 'center' }}>Utility NFTs</h2>
      <p style={{ textIndent: '50px', textAlign: 'justify' }}>
        6.8. Creator/Seller on the Platform can release NFTs which comes with
        certain utilities prescribed by the Creator/Seller (“Utility NFT(s)”).
        Subject to the terms and conditions of the Creator/Seller, upon
        purchasing of the Utility NFT(s) from the Creator/Seller, you may be
        eligible to such utilities. The Utility NFTs collected, purchased or
        redeemed by you will be stored in the Xamble Wallet.
      </p>
      <p style={{ textIndent: '50px', textAlign: 'justify' }}>
        6.9. Such utilities might include but is not limited to:
        <br />
        (a) redemption of benefits or rewards attached to the Utility NFT(s)
        purchased; <br />
        (b) digital access card or tickets in the form of bar codes or QR code
        which grants the User access to tangible goods, services and entry to
        events organised by the Creator/Seller;
        <br />
        (c)
        participateinrewardsprogrammewherebytheUserbyachievinggoalsorprogresssetby
        the Creator/Seller, can redeem corresponding benefits as determined by
        the Creator/Seller; and
        <br />
        (d) eligibility to purchase exclusive merchandise released by the
        Creator/Seller.
      </p>
      <p style={{ textIndent: '50px', textAlign: 'justify' }}>
        6.10. You hereby acknowledge that terms and conditions attached to such
        rewards or benefit programme are published and created solely by the
        Creator/Seller. In the event any issue regarding or arise out of the
        redemption of the benefit / reward, shall be raise to the Creator/Seller
        and to be settled between you and the Creator. We shall not be held
        liable for any failure of redemption of the said benefits / rewards.
      </p>
      <p style={{ textIndent: '50px', textAlign: 'justify' }}>
        6.11. Upon creation of your Account, you will have access to your own
        user profile which is public and made available to all Users (“User
        Profile”).
      </p>
      <p style={{ textIndent: '50px', textAlign: 'justify' }}>
        6.12. On the User Profile tab, Users are able to view your NFTs
        collection, upcoming events which you are attending or events attended
        and all existing or used vouchers.
      </p>
      <p style={{ textIndent: '50px', textAlign: 'justify' }}>
        6.13. Creators on the Platform may issue memberships in accordance with
        their terms and conditions (“Memberships”). The status of the
        Memberships is ranked by platinum, bronze, silver or gold (“Membership
        Tier”). You shall be awarded with the relevant Membership depending on
        the Creator’s terms and conditions. You by achieving the Membership Tier
        may be awarded the relevant benefits as determined by the Creator from
        time to time. You acknowledged that the Memberships and any benefits,
        entitlements or rewards associated with such Memberships are awarded by
        the Creator in its sole discretion according to the Creator’s terms and
        conditions. In the event any issue regarding or arise out of the
        Memberships, shall be raise to the Creator/Seller and to be settled
        between you and the Creator. We shall in our best endeavours facilitates
        the dispute between you and the Creator(s), but this shall not be deemed
        that we accept any fault or liability on our end. We shall not be held
        liable for any default arising out of the Memberships
      </p>
      <h2 style={{ textAlign: 'center' }}>7. FEES AND TAXES</h2>
      <p style={{ textIndent: '50px', textAlign: 'justify' }}>
        7.1. By using the Services, you agree to pay all applicable fees. Bank
        fees, credit card and debit card fees charged for any purchases may be
        netted out of the settlement amount of your purchases from third party
        payment service partners. You are responsible for paying any additional
        fees charged by your financial service provider. Unless otherwise
        informed in writing, we do not charge Users for accessing and browsing
        of the Platform.
      </p>
      <p style={{ textIndent: '50px', textAlign: 'justify' }}>
        7.2. Crypto-less Transaction Fee. You by accessing and connecting to the
        Dapps, and subsequently utilize Xamble Wallet to purchase, sell or send
        any NFTs on such Dapps, will be subject to a Crypto-less Transaction Fee
        of RM1.50 for each transaction performed. You authorise us to
        automatically deduct such Crypto-less Transaction Fee directly from your
        Xamble Wallet or any payments to be made to you via the Platform.
      </p>
      <p style={{ textIndent: '50px', textAlign: 'justify' }}>
        {' '}
        7.3. It is your responsibility to determine whether, and to what extent,
        any taxes apply to any transaction via the Platform, and to withhold,
        collect, report and remit the correct amount of tax to the appropriate
        tax authorities.
      </p>
      <h2 style={{ textAlign: 'center' }}>
        8. RESTRICTED USE OF XAMBLE TECH’S INTELLECTUAL PROPERTY AND CONTENT
      </h2>
      <p style={{ textIndent: '50px', textAlign: 'justify' }}>
        8.1. We grant you a limited, non-assignable, non-sublicensable,
        non-transferrable and non- exclusive right and licence to access and use
        the Services provided by us to you via the Platform, provided that you
        comply with these Terms of Service. Any third-party Intellectual
        Property linked to or referenced from the Services, are licensed to you
        by the third parties that own the third-party Intellectual Property. You
        shall not, directly or indirectly, modify the features or functionality
        of, copy or create derivative works using all or any portion of, analyse
        or remove components from, decompile, or otherwise reverse engineer or
        attempt to reverse engineer or derive source code, techniques,
        algorithms or processes from the software or permit or encourage any
        third-party to do so.
      </p>
      <p style={{ textIndent: '50px', textAlign: 'justify' }}>
        8.2. All proprietary Content, trademarks, service marks, brand names,
        logos, copyrighted information and other intellectual properties
        (“Intellectual Property”) displayed on the Platform are the exclusive
        property of Xamble Tech and where applicable, third party proprietors
        such as Creators/Sellers. No right or licence is granted directly or
        indirectly to any party accessing the Platform to use or reproduce any
        Intellectual Property (unless stipulated otherwise under the Purchase
        Terms), and no party accessing the Platform shall claim any right, title
        or interest therein. By using or accessing the Services you agree to
        comply with the copyrights, trademarks, applicable intellectual property
        related legislations and all other applicable laws that protect the
        Services, the Platform and its Content. You agree not to copy,
        distribute, republish, transmit, publicly display, publicly perform,
        modify, adapt, rent, sell, or create derivative works of any portion of
        the Services, the Platform or its Content. You also may not mirror or
        frame any part or whole of the contents of the Platform on any other
        server or as part of any other website. In addition, you agree that you
        will not use any robot, spider or any other automatic device or manual
        process to monitor or copy our Content, without our prior written
        consent (such consent is deemed given for standard search engine
        technology employed by Internet search websites to direct Internet users
        to this website).
      </p>
      <h2 style={{ textAlign: 'center' }}>8.3. Third Party Links</h2>
      <p style={{ textIndent: '50px', textAlign: 'justify' }}>
        Third party links may be provided throughout the Platform either by us
        or the Creator/Seller. These links are provided as a courtesy only, and
        the sites they link to are not under our control in any manner
        whatsoever and you therefore access them at your own risk. We are in no
        manner responsible for the contents of any such linked site or any link
        contained within a linked site, including any changes or updates to such
        sites. These links are provided merely as a convenience, and the
        inclusion of any link does not in any way imply or express affiliation,
        endorsement or sponsorship by us of any linked site and/or any of its
        content therein.
      </p>
      <p style={{ textIndent: '50px', textAlign: 'justify' }}>
        8.4. Each contributor to the Services of data, text, images, sounds,
        video, software and other Content is solely responsible for the
        accuracy, reliability, nature, rights clearance, compliance with law and
        legal restrictions associated with their Content contribution. As such,
        we are not responsible to, and shall not, regularly monitor or check for
        the accuracy, reliability, nature, rights clearance, compliance with law
        and legal restrictions associated with any contribution of Content. You
        shall not hold us responsible for any other User's actions or inactions,
        including, without limitation, things they post or otherwise make
        available via the Services.
      </p>
      <h2 style={{ textAlign: 'center' }}>
        9. USER’S CONTENTS AND UNDERTAKINGS (AS APPLICABLE)
      </h2>
      <p style={{ textIndent: '50px', textAlign: 'justify' }}>
        9.1. You understand that all Content, whether publicly posted or
        privately transmitted, is the sole responsibility of the person from
        whom such Content originated. This means that you, and not Xamble Tech,
        are entirely responsible for all Content that you uploaded, posted,
        emailed, transmitted or otherwise made available through or on the
        Platform.
      </p>
      <p style={{ textIndent: '50px', textAlign: 'justify' }}>
        9.2. You acknowledge that we shall have the right (but not the
        obligation) in our sole discretion to pre-screen, refuse, delete, remove
        or move any Content, including without limitation any Content or
        information posted by you, that is available on the Platform. Without
        limiting the foregoing, we shall have the right to remove any Content:
      </p>
      <p style={{ textIndent: '50px', textAlign: 'justify' }}>
        (a) that violates these Terms of Service; <br />
        (b) if we receive a complaint from another User; <br />
        (c) if we receive a notice of intellectual property infringement or
        other legal instruction for removal; or
        <br />
        (d) if such Content is otherwise objectionable.
      </p>
      <p style={{ textIndent: '50px', textAlign: 'justify' }}>
        9.3. We may also block delivery of a communication (including, without
        limitation, postings and/ or reviews) to or from the Services as part of
        our effort to protect the Services and/or our Users, or otherwise
        enforce the provisions of these Terms of Service. You agree that you
        must evaluate, and bear all risks associated with, the use of any
        Content, including, without limitation, any reliance on the accuracy,
        completeness or usefulness of such Content. In this regard, you
        acknowledge that you have not and, to the fullest extent permitted by
        applicable law, may not rely on any Content made available by us or
        submitted to us.
      </p>
      <p style={{ textIndent: '50px', textAlign: 'justify' }}>
        9.4. You acknowledge that by accessing or using the Platform, you may be
        exposed to Content that you may consider to be offensive, indecent or
        objectionable. To the fullest extent permitted by applicable law, under
        no circumstances shall we be liable in any way for any Content,
        including, but not limited to, any errors or omissions in any Content,
        or any loss or damage of any kind incurred as a result of the use of, or
        reliance on, any Content posted, emailed, transmitted or otherwise made
        available on the Platform.
      </p>
      <p style={{ textIndent: '50px', textAlign: 'justify' }}>
        9.5. You acknowledge, consent to and agree that we may access, preserve
        and disclose your Account information and Content if required to do so
        by law or pursuant to an order of a court or by any governmental or
        regulatory authority having jurisdiction over us or in a good faith
        belief that such access preservation or disclosure is reasonably
        necessary to: (a) comply with legal process; (b) enforce these Terms of
        Service; (c) respond to claims that any Content violates the rights of
        third parties; (d) respond to your requests for customer service; or (e)
        protect the rights, property or personal safety of Xamble Tech, its
        Users and/or the public.
      </p>
      <p style={{ textIndent: '50px', textAlign: 'justify' }}>
        9.6. You shall not (unless applicable laws or regulations prohibit these
        restrictions or you have ours or the relevant third party’s written
        permission to do so), and agree and undertake to Xamble Tech not to:
      </p>
      <p style={{ textIndent: '50px', textAlign: 'justify' }}>
        (a) upload, post, transmit or otherwise make available any Content that
        is unlawful, harmful, threatening, abusive, harassing, alarming,
        distressing, tortuous, defamatory, vulgar, obscene, libellous, invasive
        of another's privacy, hateful, or racially, ethnically or otherwise
        objectionable;
        <br />
        <br /> (b) use the Services to impersonate any person or entity, or
        otherwise misrepresent your affiliation with a person or entity;
        <br />
        <br /> (c) forge headers or otherwise manipulate identifiers in order to
        disguise the origin of any Content transmitted through the Services;
        <br />
        <br />
        (d) remove or alter any proprietary notices from the Platform;
        <br />
        <br />
        (e) cause, permit or authorise the modification, creation of derivative
        works, or translation of the Services without our express permission;
        <br />
        <br />
        (f) use the Services for the benefit of any third party or any manner
        not permitted by the licenses granted herein or for fraudulent or
        illegal purposes;
        <br />
        <br />
        (g) use the Services in a dishonest or fraudulent way to obtain any
        advantage, benefit or secret profit from any third party.
        <br />
        <br />
        (h) take any action that may undermine or manipulate the feedback or
        ratings systems;
        <br />
        <br />
        (i) duplicate, decompile, reverse engineer, disassemble or decode the
        Services (including any underlying idea or algorithm), or to defeat or
        overcome any encryption technology orsecurity measures implemented by us
        with respect to the Services and/or data transmitted, processed or
        stored by us;
        <br />
        <br />
        (j) use cheat, automation software (bots), hacks, modifications or any
        other unauthorized third-party software designed to established Account,
        perform any transaction on the Services or modify or make use of the
        Services in any way;
        <br />
        <br />
        (k) harvest or collect any information about or regarding other Account
        holders, including, without limitation, any personal data or business
        information;
        <br />
        <br />
        (l) make available any Content that you do not have a right to make
        available under any law or under contractual or fiduciary relationships
        (such as inside information, proprietary and confidential information
        learned or disclosed as part of employment relationships or under
        nondisclosure agreements);
        <br />
        <br />
        (m) upload, email, post, transmit or otherwise make available any
        Content that infringes any patent, trademark, trade secret, copyright or
        other proprietary rights of any party;
        <br />
        <br />
        (n) upload, email, post, transmit or otherwise make available any
        unsolicited or unauthorised advertising, promotional materials, "junk
        mail", "spam", "chain letters", "pyramid schemes", or any other
        unauthorised form of solicitation;
        <br />
        <br />
        (o) introduce any software viruses, worms, Trojan-horses or any other
        computer code, routines, files or programs designed to directly or
        indirectly interfere with, manipulate, interrupt, destroy or limit the
        functionality or integrity into our system;
        <br />
        <br />
        (p) interfere with, manipulate or disrupt the Services or servers or
        networks connected to the Services or any other User's use and enjoyment
        of the Services, or disobey any requirements, procedures, policies or
        regulations of networks connected to the Platform;
        <br />
        <br />
        (p) take any action or engage in any conduct that could directly or
        indirectly damage, disable, overburden, or impair the Services or the
        servers or networks connected to the Services;
        <br />
        <br />
        (q) use the Services to intentionally or unintentionally violate any
        applicable local, state, national or international law, rule,
        regulation, code, directive, guideline or policy including, without
        limitation, laws and requirements (whether or not having the force of
        law) relating to anti-fraud, anti-money laundering, counter-terrorism,
        unlawful proceeds and anti- corruption;
        <br />
        <br />
        (r) use the Services to violate the privacy of others or to "stalk" or
        otherwise harass another;
        <br />
        <br />
        (s) infringe the rights of Xamble Tech, including any intellectual
        property rights and any passing off of the same thereof;
        <br />
        <br />
        (t) use the Services to mine, collect or store personal data about other
        Users in connection with the prohibited conduct and activities set forth
        above.
      </p>
      <p style={{ textIndent: '50px', textAlign: 'justify' }}>
        9.7. By all necessary rights and/or permissions to grant the relevant
        licences to us. You further acknowledge and agree that you are solely
        responsible for anything you post or otherwise make available on or
        through the Services, including, without limitation, the accuracy,
        reliability, nature, rights clearance, compliance with laws and legal
        restrictions associated with any Content contribution. You hereby grant
        to us and our successors a perpetual, irrevocable, worldwide,
        non-exclusive, royalty-free, sub-licensable and transferable license to
        use, copy, distribute, republish, transmit, modify, adapt, create
        derivative works of, publicly display, and publicly perform such Content
        contribution on, through or in connection with the Services in any media
        formats and through any media channels, including, without limitation,
        for promoting and redistributing part of the Services (and its
        derivative works) without need of attribution and you agree to
        unconditionally waive any moral rights (and any similar rights in any
        part of the world) in that respect. You understand that your
        contribution may be transmitted over various networks and changed to
        conform and adapt to technical requirements.
      </p>
      <p style={{ textIndent: '50px', textAlign: 'justify' }}>
        9.8. Any material, information or idea you provided to us by any means
        (each, a "Submission"), is not considered confidential by us and may be
        disseminated or used by us without compensation or liability to you for
        any purpose whatsoever, including, but not limited to, developing and
        marketing purposes. By making a Submission to us, you acknowledge and
        agree that we and/or other third parties may independently develop
        software, applications, interfaces, goods and modifications and
        enhancements of the same which are identical or similar in function,
        code or other characteristics to the ideas set out in your Submission.
        Accordingly, you hereby grant to us and our successors a perpetual,
        irrevocable, worldwide, non-exclusive, royalty-free, sub- licensable and
        transferable license to develop the goods identified above, and to use,
        copy, distribute, republish, transmit, modify, adapt, create derivative
        works of, publicly display, and publicly perform any Submission on,
        through or in connection with the Services in any media formats and
        through any media channels, including, without limitation, for promoting
        and redistributing part of the Services (and its derivative works). This
        provision does not apply to personal information that is subject to our
        Privacy Policy except to the extent that you make such personal
        information publicly available on or through the Services.
      </p>
      <p style={{ textIndent: '50px', textAlign: 'justify' }}>
        {' '}
        9.9. You shall indemnify, defend and hold harmless Xamble Tech and its
        subsidiaries, affiliates, related entities, directors, officers, agents,
        representatives, co-branders and employees from all actions, claims and
        demands which may be instituted or made against you arising from your
        use of third party’s intellectual property rights or violation of any
        applicable intellectual property laws.
      </p>
      <h2 style={{ textAlign: 'center' }}>
        10. DISCLAIMERS, EXCLUSIONS AND FORCE MAJEURE <br />
        <br /> Disclaimers
      </h2>
      <p style={{ textIndent: '50px', textAlign: 'justify' }}>
        10.1. THE PLATFORM AND/OR SERVICES ARE PROVIDED ON "AS IS" AND “AS
        AVAILABLE” BASIS WITHOUT ANY WARRANTIES, CLAIMS OR REPRESENTATIONS MADE
        BY US OF ANY KIND EITHER EXPRESSED, IMPLIED OR STATUTORY, INCLUDING,
        WITHOUT LIMITATION, WARRANTIES OF QUALITY, PERFORMANCE,
        NON-INFRINGEMENT, MERCHANTABILITY, OR FITNESS FOR A PARTICULAR PURPOSE,
        NOR ARE THERE ANY WARRANTIES CREATED BY COURSE OF DEALING, COURSE OF
        PERFORMANCE, CUSTOM OR TRADE USAGE. WITHOUT LIMITING THE FOREGOING AND
        TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, WE DO NOT WARRANT
        THAT THE PLATFORM AND/OR SERVICES OR THE FUNCTIONS CONTAINED THEREIN
        WILL BE AVAILABLE, ACCESSIBLE, UNINTERRUPTED, TIMELY, SECURE, ACCURATE,
        COMPLETE OR ERROR-FREE, THAT DEFECTS, IF ANY, WILL BE CORRECTED, OR THAT
        THE PLATFORM AND/OR THE SERVER THAT MAKES THE SAME AVAILABLE ARE FREE OF
        VIRUSES, CLOCKS, TIMERS, COUNTERS, WORMS, SOFTWARE LOCKS, DROP DEAD
        DEVICES, TROJAN-HORSES, ROUTINGS, TRAP DOORS, TIME BOMBS OR ANY OTHER
        HARMFUL CODES, INSTRUCTIONS, PROGRAMS OR COMPONENTS.
      </p>
      <p style={{ textIndent: '50px', textAlign: 'justify' }}>
        10.2. WHILE WE ENDEAVOUR TO ENSURE THAT THE PLATFORM AND/OR SERVICES ARE
        SECURED, YOU ACKNOWLEDGE AND AGREE THAT THE ENTIRE RISK ARISING OUT OF
        THE ACCESS, USE OR PERFORMANCE OF THE PLATFORM AND/OR THE SERVICES SHALL
        REMAIN WITH YOU TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW.
      </p>
      <p style={{ textIndent: '50px', textAlign: 'justify' }}>
        10.3. TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT
        SHALL WE BE LIABLE WHETHER IN CONTRACT, WARRANTY, TORT (INCLUDING,
        WITHOUT LIMITATION, NEGLIGENCE (WHETHER ACTIVE, PASSIVE OR IMPUTED),
        PRODUCT LIABILITY, STRICT LIABILITY OR OTHER THEORY), OR OTHER CAUSE OF
        ACTION AT LAW, IN EQUITY, BY STATUTE OR OTHERWISE, FOR:
        <br />
        <br />
        (A) (I) LOSS OF USE; (II) LOSS OF PROFITS; (III) LOSS OF REVENUES; (IV)
        LOSS OF DATA; (V) LOSS OF GOODWILL; OR (VI) FAILURE TO REALISE
        ANTICIPATED SAVINGS, IN EACH CASE WHETHER DIRECT OR INDIRECT; AND
        <br />
        <br />
        (B) ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY DAMAGES,
        ARISING OUT OF OR IN CONNECTION WITH THE USE OF OR INABILITY TO USE THE
        PLATFORM OR THE SERVICES, INCLUDING, WITHOUT LIMITATION, ANY DAMAGES
        RESULTING THEREFROM, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF
        SUCH DAMAGES.
      </p>
      <p style={{ textIndent: '50px', textAlign: 'justify' }}>
        10.4. WE SHALL NOT BE LIABLE FOR ANY DELAY OR FAILURE TO PERFORM THE
        SERVICES, WHERE THE CAUSE OF SUCH DELAY OR FAILURE IS BEYOND OUR
        REASONABLE CONTROL. SUCH CAUSES MAY INCLUDE BUT NOT LIMITED TO AN ACT OF
        GOD, RIOT, CIVIL COMMOTION, STRIKE (WHETHER OR NOT INVOLVING EMPLOYEES
        OF XAMBLE TECH), LOCKOUT OR OTHER LABOUR DISTURBANCE, FIRE, WAR, ACTS OF
        FOREIGN ENEMIES, POWER OUTAGE, PANDEMICS, EPIDEMICS, NETWORK CONGESTION,
        TELECOMMUNICATIONS FAILURE, ELECTRICAL POWER FAILURES, OR ANY FAULT,
        INTERRUPTION, DISRUPTION OR MALFUNCTION OF EQUIPMENT, TOOLS, UTILITIES,
        COMMUNICATIONS, COMPUTER (SOFTWARE AND HARDWARE) SERVICES OR NETWORKS,
        GOVERNMENT ORDER OR CHANGE IN ANY LAW OR REGULATION WHICH RENDERS THE
        PERFORMANCE IMPRACTICAL.
      </p>
      <p style={{ textIndent: '50px', textAlign: 'justify' }}>
        10.5. IF WE CONSIDER A FORCE MAJEURE EVENT TO BE OF SUCH SEVERITY OR TO
        BE CONTINUING FOR SUCH PERIOD OF TIME THAT WE ARE UNABLE TO PERFORM ANY
        OF OUR OBLIGATIONS, WE SHALL HAVE THE ABSOLUTE DISCRETION TO DECIDE ON
        SUCH ALTERNATIVE ARRANGEMENT(S), INCLUDING BUT NOT LIMITED TO
        TERMINATING THIS TERMS OF SERVICE AND/ OR ANY SPECIFIC CONTRACT OR
        TRANSACTION AND WITHOUT LIABILITY TO YOU OTHER THAN A REFUND OF PAYMENTS
        FOR SERVICES MADE BY YOU FOR WHICH IS NOT PERFORMED OR UNABLE TO BE
        PERFORMED.
      </p>
      <p style={{ textIndent: '50px', textAlign: 'justify' }}>
        10.6. THE INFORMATION AND STATISTICS PROVIDED IN THE PLATFORM IS FOR
        GENERAL INFORMATIONAL PURPOSES ONLY. ALL INFORMATION ON THE PLATFORM IS
        PROVIDED IN GOOD FAITH, HOWEVER WE MAKE NO REPRESENTATION OR WARRANTY OF
        ANY KIND, EXPRESS OR IMPLIED, REGARDING THE ACCURACY, ADEQUACY,
        VALIDITY, RELIABILITY, AVAILABILITY, OR COMPLETENESS OF ANY INFORMATION
        ON THE PLATFORM. UNDER NO CIRCUMSTANCES SHALL WE HAVE ANY LIABILITY TO
        YOU FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE
        OF THE PLATFORM OR RELIANCE ON ANY INFORMATION PROVIDED ON THE PLATFORM.
        YOUR USE OF THE PLATFORM AND YOUR RELIANCE ON ANY INFORMATION ON THE
        PLATFORM IS SOLELY AT YOUR OWN RISK.
      </p>
      <p style={{ textIndent: '50px', textAlign: 'justify' }}>
        10.7. YOU ACKNOWLEDGE, ACCEPT AND AGREE THAT ALL DISCLAIMERS, EXCLUSIONS
        AND LIMITATIONS OF LIABILITY SET OUT IN THESE TERMS OF SERVICE REPRESENT
        A FAIR AND REASONABLE ALLOCATION OF RISKS AND BENEFITS OF THE AGREEMENT
        BETWEEN US AND YOU, TAKING ALL RELEVANT FACTORS INTO CONSIDERATION,
        INCLUDING WITHOUT LIMITATION THE VALUE OF THE CONSIDERATION PROVIDED BY
        YOU TO US AND THE AVAILABILITY AND COSTS OF INSURANCE WITH RESPECT TO
        THE STATED RISKS. YOU FURTHER AGREE THAT THESE DISCLAIMERS, EXCLUSIONS
        AND LIMITATIONS SHALL BE ENFORCEABLE TO THE FULLEST EXTENT PERMITTED BY
        APPLICABLE LAW.
      </p>
      <h2 style={{ textAlign: 'center' }}>11. VIOLATION OF TERMS OF SERVICE</h2>
      <p style={{ textIndent: '50px', textAlign: 'justify' }}>
        11.1. Any violation of these Terms of Service may result in a range of
        actions, including, without limitation, any or all of the following:
        <br />
        <br /> (a) Limits placed on Account privileges;
        <br />
        <br /> (b) Account suspension and subsequent termination; and/or
        <br />
        <br />
        (c) Civil actions, including without limitation a claim for damages,
        specific performance and/or interim or injunctive relief.
      </p>
      <p style={{ textIndent: '50px', textAlign: 'justify' }}>
        11.2. If you believe a User on our Platform is violating these Terms of
        Service, please contact us via email at help@xamble.com or through the
        communication channel(s) made available on the Platform.
      </p>
      <h2 style={{ textAlign: 'center' }}>
        12. SUSPENSION AND TERMINATION; ACCOUNT DEACTIVATION AND CLOSURE <br />
        <br /> Suspension and Termination{' '}
      </h2>
      <p style={{ textIndent: '50px', textAlign: 'justify' }}>
        You agree that we may in our sole discretion, with or without notice,
        and without any liability to you or any third party, suspend or
        terminate your Account, remove or discard from the Platform any Content
        associated with your Account, suspend, disable or delete any promotions,
        offers, deals, utility, privileges or any benefits associated with your
        Account, temporarily disable your access to any or all of the Services
        and/ or features on the Platform and/or take any other actions that we
        deem necessary. Typical reasons for such actions may include, but not
        limited to:
      </p>
      <p style={{ textIndent: '50px', textAlign: 'justify' }}>
        (a) [the Account has been inactive for a consecutive period of thirty
        six (36) months];
        <br />
        <br /> (b) having multiple user accounts or allowing unauthorised
        persons to access and use the Account;
        <br />
        <br /> (c) in our opinion, there is dishonesty, suspected fraud,
        illegality, criminality or misrepresentation in the conduct of your
        Account or your use of the Platform and/or Services;
        <br />
        <br />
        (d) you are in breach or we have reasonable grounds to believe that you
        have breached any of these Terms of Service and/or any applicable terms
        and conditions as may be provided by us from time to time, or have
        engaged in any conduct prejudicial to Xamble Tech or in our opinion,
        your acts are prejudicial to Xamble Tech’s interest;
        <br />
        <br /> (e) you are in breach of any acts, statutes, laws, by-laws,
        rules, regulations, guidelines and/or policies imposed by any authority,
        regulatory body or government agency;
        <br />
        <br /> (f) you have acted in bad faith or with malicious intent, or that
        we have reasonable grounds to believe that your behaviour is harmful, of
        defamatory nature or abusive to other Users, third parties and/or Xamble
        Tech;
        <br />
        <br /> (g) your name is listed under any regulatory watchlist (including
        but not limited to listing related to terrorism and terrorism financing)
        under the applicable laws governing anti- money laundering,
        anti-terrorism financing and/ or corruption and/or such other local,
        foreign or international laws and regulations of similar nature;
        <br />
        <br /> (h) if we are required to do so pursuant to an order of a court
        or by any governmental or regulatory authority having the relevant
        jurisdiction;
        <br />
        <br /> (i) you have submitted false documents or have declared false
        information during your registration with or application to us; and/or
        <br />
        <br /> (j) you fail to provide any additional information which we may
        request from you from time to time for verification purposes.
        <br />
        <br /> Use of the Platform, Services and/or an Account for suspicious,
        fraudulent, illegal, harassing, defamatory, threatening or abusive
        purposes may be referred by us to the relevant law enforcement
        authorities without notice to you.
      </p>
      <p style={{ textIndent: '50px', textAlign: 'justify' }}>
        12.2. If we suspend your Account, our Services and/ or any specific
        features to you pursuant to Clause 12.1 above, we shall have the right
        to commence investigation into such event and shall have the absolute
        right to disable your utilisation of any or all Services and/or hold
        back any and all refund or money or benefit due to you (as the case may
        be) until and unless clearance has been obtained from the relevant
        authorities and/or the satisfactory completion of any investigation.
      </p>
      <p style={{ textIndent: '50px', textAlign: 'justify' }}>
        12.3. In the event your access and/or utilisation of the Platform and/or
        Services is suspended, ceased or terminated by us due to suspicious,
        fraudulent, illegal or unlawful transactions including but not limited
        to breaches of any law or any rules, regulations, policies and/or
        guidelines made thereunder), you will not be able to continue to utilise
        any or all Services and shall not be entitled to obtain any money or
        refund or benefit whatsoever. It shall be lawful for us to retain for an
        indefinite period, or deal at its own discretion with, or release to the
        relevant authorities, any money or refund or benefit in accordance with
        applicable legislations, rules, regulation and/or guidelines. You shall
        not be entitled to claim any form of compensation for any loss arising
        therefrom.
      </p>
      <h2 style={{ textAlign: 'center' }}>
        Consequences of Account Termination
      </h2>
      <p style={{ textIndent: '50px', textAlign: 'justify' }}>
        12.4. Upon termination of the Account due to any reason whatsoever, your
        Account associated with the Xamble Wallet shall no longer be accessible
        by you. [Xamble Tech may disable, invalidate or otherwise render
        inoperable your Xamble Wallet and remove any of utility, privileges or
        benefits associated with your ownership of the NFTs.]
      </p>
      <p style={{ textIndent: '50px', textAlign: 'justify' }}>
        12.5. Any provision of these Terms of Service which expressly or by
        implication is intended to continue to remain effective and binding on
        the User after the termination of Account and/or the termination of
        Services, such as provisions concerning the User’s warranties,
        undertakings and indemnifications to us, shall survive such termination.
      </p>
      <h2 style={{ textAlign: 'center' }}>
        13. USER’S REPRESENTATIONS AND WARRANTIES
      </h2>
      <p style={{ textIndent: '50px', textAlign: 'justify' }}>
        13.1. By accessing the Platform, use of the Services and/or registering
        an Account with us, you irrevocably represent and warrant to us that:
        <br />
        <br /> (a) you possess the legal capacity (and in the case of a minor,
        valid parent or legal guardian’s consent), right and ability to accept
        and enter into these Terms of Service and to comply with all the terms
        and conditions contained herein;
        <br />
        <br /> (b) if you are representing and acting on behalf a corporate
        body, you possess the full authority, capacity, right and ability to
        accept and enter into these Terms of Service on behalf of the corporate
        body and to comply with all the terms and conditions contained herein;
        <br />
        <br /> (c) any and all information and documentations you provided or
        submitted to Xamble Tech for whatsoever purposes are and will remain
        true and not fake, accurate, not misleading, complete and up-to-date;
        <br />
        <br /> (d) you will access and use the Platform and/or Services for
        lawful purposes only and in accordance with these Terms of Service and
        all applicable laws, rules, regulations, codes, directives, guidelines
        and policies in force from time to time; and
        <br />
        <br /> (e) if so required, you will make yourself available to, and to
        render full cooperation and assistance to Xamble Tech and/or the
        relevant authorities concerning any pending and future contentious
        matters, audits or investigations (including investigations commenced
        pursuant to Clause 12 above) arising out of or in connection with your
        Account or use of the Platform and/or Services in order to ensure that
        such{' '}
      </p>
      <h2 style={{ textAlign: 'center' }}>
        14. INDEMNITY & LIMITATION OF LIABILITY
      </h2>
      <p style={{ textIndent: '50px', textAlign: 'justify' }}>
        14.1. You agree to indemnify, defend and hold us harmless, and our
        shareholders, subsidiaries, affiliates, related entities, directors,
        officers, employees, agents, representatives, co-branders and/or
        relevant business partners (collectively, the "Indemnified Parties")
        from and against any and all claims, actions, proceedings and suits and
        all related liabilities, damages, settlements, penalties, fines, costs
        and expenses (including, without limitation, the legal costs and dispute
        resolution expenses) incurred by any Indemnified Party arising out of or
        relating to: (i) your violation or breach of any of these Terms of
        Service or any policy or guideline referenced herein, (ii) your use or
        misuse of the Platform or Services, or (iii) your breach of any laws or
        any rights of a third party.
      </p>
      <p style={{ textIndent: '50px', textAlign: 'justify' }}>
        14.2. In no event shall we be liable for loss of profit or goodwill,
        loss of data, loss of production or revenue or any type of special
        indirect or consequential loss whatsoever (including loss or damage
        suffered by the Customer as a result of an action brought by a third
        party) even if we had been advised of the possibility of incurring the
        same.
      </p>
      <p style={{ textIndent: '50px', textAlign: 'justify' }}>
        14.3. Notwithstanding any other provisions of these Terms of Service,
        our maximum cumulative liability to you or to any other party for all
        losses, arising out of or relating to your use of our Platform and/ or
        our Services, shall not exceed [RM5,000.00] or its equivalent in your
        jurisdiction or the sum that you have paid to us under such individual
        contract or transaction, whichever is lower.
      </p>
      <h2 style={{ textAlign: 'center' }}>15. ASSUMPTION OF RISKS</h2>
      <p style={{ textIndent: '50px', textAlign: 'justify' }}>
        15.1. You acknowledge and agree that there are risks associated with
        purchasing and holding NFTs and using blockchain technology. These
        include, but are not limited to, risk of losing access to your NFTs due
        to loss of a PIN, wallet keys, two-factor authentication devices, or
        log-in information, custodial error or purchaser error, smart contract
        error, risk of mining or blockchain attacks, risk of hacking and
        security weaknesses, risk of unfavorable regulatory intervention in one
        or more jurisdictions, risks related to token taxation, risk of personal
        information disclosure, risk of uninsured losses, unanticipated risks,
        and volatility risks. The prices of collectibleblockchain assets are
        extremely volatile and subjective and collectible blockchain assets have
        no inherent or intrinsic value. You acknowledge that you have obtained
        sufficient information to make an informed decision to purchase an NFT,
        including carefully reviewing the code of the smart contract and the
        Purchase Terms of the NFT and fully understand and accept the functions
        of the same. The regulatory regime governing blockchain technologies,
        cryptocurrencies and tokens is uncertain, and new regulations or
        policies may materially adversely affect the development of the
        Platform, and therefore the potential utility or value of your NFTs. Any
        purchase or sale you make, accept or facilitate outside of the Platform
        of an NFT will be entirely at your risk. Any use of a wallet will be
        entirely at your own risk. Except as may otherwise be provided in these
        Terms of Service, we do not control or endorse purchases or sales of
        NFTs outside of the Platform. You are solely responsible to pay any and
        all sales, use, value-added and other taxes, duties, and assessments
        (except taxes on our net income) now or hereafter claimed or imposed by
        any governmental authority associated with your use of the Services.
        Except for income taxes levied on us (if applicable), you: (a) will be
        solely responsible for reporting any tax obligations when, if ever, such
        obligations arise as a result of your use of the Services or in relation
        to a NFT; (b) will pay or reimburse Company for all national, federal,
        state, local or other taxes and assessments of any jurisdiction,
        including value added taxes and other taxes as may be required, and
        amounts levied in lieu thereof based on charges set, services performed
        or payments made hereunder, as are now or hereafter may be imposed under
        the authority of any national, state, local or any other taxing
        jurisdiction; and (c) will not be entitled to deduct the amount of any
        such taxes, duties or assessments from payments (including blockchain
        gas fees) made to us pursuant to these Terms of Service. Neither these
        Terms of Service nor any other communication from Company constitutes
        tax advice, and users are solely responsible for determining what, if
        any, taxes apply to their interaction with Company NFTs and the
        Services. We expressly deny and disclaim any liability to you and deny
        any obligation to indemnify you or hold you harmless for any losses you
        may incur by transacting, or facilitating transactions, in NFTs outside
        of the NFT Platform.
      </p>
      <h2 style={{ textAlign: 'center' }}>16. SECURITY BREACH</h2>
      <p style={{ textIndent: '50px', textAlign: 'justify' }}>
        16.1. If you suspect that your Account or any of your details have been
        compromised, or in any event you become aware of any fraud or attempted
        fraud or any other security incident (including a cyber-security attack)
        affecting you and/or Xamble Tech (collectively a "Security Breach"), you
        shall notify us immediately at [*insert communication channel on
        security breach*] and provide accurate and up to date information
        throughout the duration of the Security Breach. a.
      </p>
      <p style={{ textIndent: '50px', textAlign: 'justify' }}>
        16.2. You hereby agree to take all steps reasonably require by us from
        time to time to reduce or manage any Security Breach.
      </p>
      <p style={{ textIndent: '50px', textAlign: 'justify' }}>
        16.3. We do not guarantee on any reimbursement for any losses suffered
        or be liable to you for any losses suffered as a result of the Security
        Breach.
      </p>
      <h2 style={{ textAlign: 'center' }}>17. COMMUNICATIONS</h2>
      <p style={{ textIndent: '50px', textAlign: 'justify' }}>
        17.1. All and any notices, demands, requests or other communications to
        be given or made under these Terms of Service shall be in writing, and
        shall be sufficiently given or made to the other party by serving such
        notice at or sending such notice by hand, registered post, facsimile,
        electronic mail or text messaging to the contact details as notified by
        one party to the other from time to time or via the communication
        channel made available on the Platform.
      </p>
      <p style={{ textIndent: '50px', textAlign: 'justify' }}>
        17.2. Notice shall be deemed given:
        <br />
        <br /> (a) in the case of hand delivery, upon the receipt of written
        acknowledgment signed by the recipient;
        <br />
        <br /> (b) in the case of registered post, five (5) business days after
        posting; and
        <br />
        <br /> (c) in case of facsimile, email, text messaging, or the
        communication channel(s) available on the Platform, on the day of
        transmission provided that the sender has not received a failed or
        undeliverable message from host provider of the recipient within the day
        of transmission or a read receipt is sent to and received by the sender.
      </p>
      <p style={{ textIndent: '50px', textAlign: 'justify' }}>
        17.3. Notwithstanding Clauses 17.1. and 17.2 above, you acknowledge that
        you may from time to time communicate with us verbally through phone
        conversation to facilitate your request or the resolution of any issue
        or problem faced by you. If any significant subject matter has been
        agreed between us and you verbally via a phone conversation, our
        customer service team may thereafter put the same into writing and such
        notice will be sent to you via email for record.
      </p>
      <h2 style={{ textAlign: 'center' }}>
        18. GOVERNING LAW AND JURISDICTION
      </h2>
      <p style={{ textIndent: '50px', textAlign: 'justify' }}>
        18.1. These Terms of Service shall be governed by and construed in
        accordance with the laws of Malaysia without regard to the conflict or
        choice of law principles.
      </p>
      <p style={{ textIndent: '50px', textAlign: 'justify' }}>
        18.2. Any dispute, legal action or proceeding arising out of or in
        connection with these Terms of Service shall be submitted to the
        jurisdiction of the courts in Malaysia, unless Xamble Tech in its own
        discretion chooses to submit the same for settlement via arbitration in
        your jurisdiction or otherwise.
      </p>
      <h2 style={{ textAlign: 'center' }}>19. GENERAL PROVISIONS</h2>
      <p style={{ textIndent: '50px', textAlign: 'justify' }}>
        19.1. If any provision of these Terms of Service shall be deemed
        invalid, unlawful, void or for any reason unenforceable under the law of
        any jurisdiction, then that provision shall be deemed severable from
        these terms and conditions and shall not affect the validity and
        enforceability of any remaining provisions in such jurisdiction nor the
        validity and enforceability of the provision in question under the law
        of any other jurisdiction. In such case, you acknowledge that we may
        introduce and come out with a substitute provision which is valid and
        enforceable and achieves to the greatest extent possible the economic,
        legal and commercial objectives of such illegal, void, invalid,
        prohibited or unenforceable term, condition, covenant or undertaking and
        you hereby agree to accept and be bound by such substitute provision.
      </p>
      <p style={{ textIndent: '50px', textAlign: 'justify' }}>
        19.2. You are not allowed to assign, transfer or sublicense any rights
        and benefits granted to you hereunder. We shall be entitled to transfer
        or assign any of its rights or obligations under these Terms of Service
        to a present or future affiliate or pursuant to a merger, consolidation,
        reorganisation or sale of all or substantially all of the assets or
        business, or by operation of law, without notice to you.
      </p>
      <p style={{ textIndent: '50px', textAlign: 'justify' }}>
        19.3. Nothing in these Terms of Service shall constitute a partnership,
        joint venture or principal-agent relationship between you and us, nor
        does it authorise you to make any representations or incur any costs or
        liabilities on our behalf
      </p>
      <p style={{ textIndent: '50px', textAlign: 'justify' }}>
        19.4. Our failure to exercise or delay in exercising of any claim,
        remedy, right, power or privilege under these Terms of Service shall not
        be operated and deemed as a waiver thereof, or any single or partial
        exercise of any claim, remedy, right, power or privilege shall not
        preclude any other or further exercise thereof or the exercise of any
        other claim, remedy, right, power or privilege by us. Our rights and
        remedies provided in these Terms of Service are cumulative and not
        exclusive of any rights or remedies otherwise provided by law.
      </p>
      <p style={{ textIndent: '50px', textAlign: 'justify' }}>
        19.5. These Terms of Service are solely for your and our benefit and are
        not for the benefit of any other person or entity, except for our
        affiliates and subsidiaries (and each of our affiliates' and
        subsidiaries' respective successors and assigns).
      </p>
      <p style={{ textIndent: '50px', textAlign: 'justify' }}>
        19.6. The terms and conditions set forth in these Terms of Service and
        any additional terms and conditions or policies included or referred to
        in these Terms of Service constitute the entire agreement and
        understandings between you and us with respect to the Platform, Account
        and/or Services.
      </p>
      <p style={{ textIndent: '50px', textAlign: 'justify' }}>
        19.7. XAMBLE TECH RESERVES ALL RIGHTS NOT EXPRESSLY GRANTED HEREIN.
      </p>
              </Stack>
            </MainCard>
          </Grid>
        </Grid>
      </Container>
    </HeaderWrapper>
  );
};

export default PrivacyService;
