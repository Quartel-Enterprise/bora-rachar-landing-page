import { unstable_setRequestLocale as unstableSetRequestLocale } from 'next-intl/server'

import { ComponentLocaleProps } from '@/utils/i18nConfig'

export default function Terms({ params: { locale } }: ComponentLocaleProps) {
  unstableSetRequestLocale(locale)

  return (
    <div className="mx-auto flex max-w-4xl flex-col p-16">
      <h1 className="mb-4 text-3xl font-bold">
        Termos de Serviço do Aplicativo &quot;Bora Rachar&quot;
      </h1>
      <p className="mb-2">Última atualização: 03/08/2024 às 11:00</p>

      <p className="mb-10">
        Bem-vindo ao Bora Rachar! Estes Termos de Serviço (&quot;Termos&quot;)
        regem o uso do aplicativo móvel Bora Rachar e quaisquer serviços
        relacionados (coletivamente, o &quot;Aplicativo&quot;) fornecidos pela
        Quare Software (&quot;nós&quot;, &quot;nos&quot; ou &quot;nosso&quot;).
        Por favor, leia estes Termos cuidadosamente antes de usar o Aplicativo.
      </p>

      <div className="mb-6">
        <h2 className="mb-2 text-2xl font-bold">1. Aceitação dos Termos</h2>
        <p className="mb-4">
          1.1 Ao baixar, instalar ou usar o Aplicativo, você (&quot;você&quot;
          ou &quot;Usuário&quot;) concorda em ficar vinculado a estes Termos. Se
          você não concordar com estes Termos, não poderá acessar ou usar o
          Aplicativo.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="mb-2 text-2xl font-bold">2. Elegibilidade</h2>
        <p className="mb-4">
          2.1 Você deve ter pelo menos 18 anos de idade ou a maioridade legal em
          sua jurisdição para usar o Aplicativo. Ao usar o Aplicativo, você
          declara e garante que atende aos requisitos de elegibilidade. Se você
          for menor de idade, poderá usar o Aplicativo somente sob a supervisão
          de um pai ou responsável legal que concorde com estes Termos.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="mb-2 text-2xl font-bold">3. Descrição do Serviço</h2>
        <p className="mb-4">
          3.1 O Aplicativo Bora Rachar é uma plataforma móvel que permite aos
          usuários criar grupos, adicionar pessoas aos grupos e registrar e
          dividir despesas entre os membros do grupo. O Aplicativo não processa
          pagamentos diretamente, atuando apenas como uma plataforma para
          registrar e calcular a divisão de despesas.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="mb-2 text-2xl font-bold">4. Criação de Conta</h2>
        <p className="mb-4">
          4.1 Para acessar e usar todas as funcionalidades do Aplicativo, você
          pode precisar criar uma conta. Você é responsável por manter a
          confidencialidade de suas credenciais de login e é totalmente
          responsável por todas as atividades que ocorram em sua conta. Você
          concorda em nos notificar imediatamente sobre qualquer uso não
          autorizado de sua conta.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="mb-2 text-2xl font-bold">5. Uso do Aplicativo</h2>
        <p className="mb-4">
          5.1. Você concorda em usar o Aplicativo apenas para fins legais e de
          acordo com estes Termos. Você concorda em não:
        </p>
        <ul className="ml-6 list-disc">
          <li className="mb-2">
            5.1.1 Usar o Aplicativo para qualquer finalidade ilegal ou não
            autorizada;
          </li>
          <li className="mb-2">
            5.1.2 Interferir ou interromper os servidores ou redes conectadas ao
            Aplicativo;
          </li>
          <li className="mb-2">
            5.1.3 Tentar obter acesso não autorizado ao Aplicativo ou a qualquer
            informação de outros usuários;
          </li>
          <li className="mb-2">
            5.1.4 Carregar, transmitir ou distribuir qualquer vírus, worm ou
            outro código malicioso;
          </li>
          <li className="mb-2">
            5.1.5 Coletar ou coletar qualquer informação pessoalmente
            identificável de outros usuários sem o consentimento deles;
          </li>
          <li className="mb-2">
            5.1.6. Usar o Aplicativo para enviar spam ou outras comunicações não
            solicitadas;
          </li>
          <li className="mb-2">Se passar por outra pessoa ou entidade.</li>
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="mb-2 text-2xl font-bold">6. Lei de Proteção de Dados</h2>
        <p className="mb-4">
          6.1. A privacidade do Usuário é muito relevante e, por esta razão,
          utilizamos as melhores práticas recomendadas de mercado para manter
          seguros todos os dados pessoais inseridos pelo Usuário. No entanto,
          nos eximimos de responsabilidade pelos danos e prejuízos de toda
          natureza que possam decorrer do conhecimento que terceiros não
          autorizados possam ter de quaisquer das informações repassadas, em
          decorrência de falha exclusivamente atribuível aos Usuários, ou a
          terceiros, que fujam a qualquer controle razoável, como,
          exemplificativamente, a atuação de “hackers”, mediante atos ilícitos.
        </p>
        <p className="mb-4">
          6.2. Os dados coletados e os registros de atividades serão armazenados
          pelo prazo mínimo estipulado pela legislação brasileira.
        </p>
        <p className="mb-4">
          6.3. Caso haja solicitação do Usuário, os dados poderão ser apagados
          antes deste prazo. No entanto, pode ocorrer dos dados precisarem ser
          mantidos por período superior, por motivo de lei, ordem judicial,
          prevenção à fraude e outros interesses legítimos, nos termos da Lei n.
          13.709/2018, conhecida por Lei Geral de Proteção de Dados (LGPD).
        </p>
        <p className="mb-4">
          6.4. Poderemos, ainda, coletar e armazenar informações sobre a
          navegação do Usuário na plataforma, tais como:
        </p>
        <ul className="ml-6 list-disc">
          <li className="mb-2">6.4.1. A identificação do dispositivo;</li>
          <li className="mb-2">
            6.4.2. Os endereços IP (“Internet Protocol”) e MAC (“Media Access
            Control”) do dispositivo;
          </li>
          <li className="mb-2">
            6.4.3. A localização geográfica (geolocalização);
          </li>
          <li className="mb-2">6.4.4. O sistema operacional e sua versão;</li>
          <li className="mb-2">
            6.4.5. O tipo de navegador e a versão atualizada;
          </li>
          <li className="mb-2">
            6.4.6. Informações sobre a rede utilizada e o número de telefone;
          </li>
          <li className="mb-2">
            6.4.7. Idioma utilizado no dispositivo ou navegador;
          </li>
          <li className="mb-2">6.4.8. A resolução de tela;</li>
          <li className="mb-2">6.4.9. A versão do aplicativo;</li>
          <li className="mb-2">
            6.4.10. O tempo de permanência/utilização dos recursos;
          </li>
          <li className="mb-2">
            6.4.11. Os eventuais erros ocorridos e seus detalhamentos.
          </li>
        </ul>
        <p className="mb-4">
          6.5. Os dados coletados e armazenados não serão comercializados e/ou
          alugados para terceiros, sendo que o uso, acesso e compartilhamento,
          quando necessários, serão realizados para atingir a finalidade, dentro
          dos limites permitidos em lei.
        </p>
        <p className="mb-4">
          6.6. O Usuário reconhece e entende que a Quare Software não pode e não
          garante que arquivos disponíveis para download da internet estejam
          livres de vírus, worms, cavalos de tróia ou outro código que possa
          manifestar propriedades contaminadoras ou destrutivas. O Usuário é
          responsável por implementar procedimentos e checkpoints suficientes
          para satisfazer seus requisitos de segurança e por manter meios
          externos a este site para reconstrução de qualquer dado perdido. A
          Quare Software não assume responsabilidade alguma ou risco pelo uso da
          internet.
        </p>
        <p className="mb-4">
          6.6. A Quare Software reserva o direito de monitorar o uso deste site
          para determinar o cumprimento do presente Termo, assim como o de
          remover ou vetar qualquer informação por qualquer razão. Seja como
          for, o Usuário permanece completamente responsável pela manipulação
          dos dados e conteúdos contidos neste site.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="mb-2 text-2xl font-bold">7. Conteúdo do Usuário</h2>
        <p className="mb-4">
          7.1. Você é o único responsável por todo o conteúdo que você enviar,
          carregar, transmitir ou disponibilizar de outra forma através do
          Aplicativo (&quot;Conteúdo do Usuário&quot;). Você declara e garante
          que possui todos os direitos necessários sobre o Conteúdo do Usuário
          ou que tem o direito de enviar o Conteúdo do Usuário através do
          Aplicativo.
        </p>
        <p className="mb-4">
          7.2. Você concede a nós uma licença não exclusiva, mundial, livre de
          royalties, perpétua, irrevogável e sublicenciável para usar,
          reproduzir, modificar, adaptar, publicar, traduzir, criar trabalhos
          derivados, distribuir, executar e exibir o Conteúdo do Usuário em
          conexão com o Aplicativo e nosso negócio (e o de nossos sucessores e
          afiliados).
        </p>
        <p className="mb-4">
          7.2. Você reconhece e concorda que podemos preservar o Conteúdo do
          Usuário e também divulgá-lo se formos obrigados a fazê-lo por lei ou
          se acreditarmos de boa-fé que tal preservação ou divulgação seja
          razoavelmente necessária para: (a) cumprir o processo legal; (b) fazer
          cumprir estes Termos; (c) responder a alegações de que qualquer
          Conteúdo do Usuário viola os direitos de terceiros; ou (d) proteger os
          direitos, propriedade ou segurança pessoal da Quare Software, nossos
          usuários ou o público.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="mb-2 text-2xl font-bold">
          8. Direitos de Propriedade Intelectual
        </h2>
        <p className="mb-4">
          8.1. O Aplicativo e todo o seu conteúdo, incluindo, entre outros,
          texto, gráficos, logotipos, imagens, clipes de áudio, videoclipes e
          software, são de nossa propriedade ou propriedade de nossos
          licenciadores, devidamente protegidos pela na Lei n. 9.610/1998. .
        </p>
        <p className="mb-4">
          8.2. Você não pode modificar, copiar, distribuir, transmitir, exibir,
          executar, reproduzir, publicar, licenciar, criar trabalhos derivados,
          transferir ou vender qualquer informação ou software obtido do
          Aplicativo sem nossa permissão prévia por escrito.
        </p>
        <p className="mb-4">
          8.3. O Usuário fica, assim, expressamente proibido de publicar,
          enviar, apresentar ou fazer conexão a este site e Aplicativo que:
        </p>
        <ul className="ml-6 list-disc">
          <li className="mb-2">
            8.3.1. Não tenha o direito de postar, incluindo material de
            propriedade de terceiros;
          </li>
          <li className="mb-2">
            8.3.2. Defenda atividade ilegal ou discuta a intenção de fazer algo
            ilegal;
          </li>
          <li className="mb-2">8.3.4. Seja vulgar, obsceno ou pornográfico;</li>
          <li className="mb-2">
            8.3.5. Não diga respeito diretamente a este site e Aplicativo;
          </li>
          <li className="mb-2">
            8.3.6. Possa ameaçar ou insultar, difamar, caluniar, invadir
            privacidade, perseguir, ser obsceno, pornográfico, racista,
            homofóbico, assedie ou ofenda qualquer pessoa;
          </li>
          <li className="mb-2">
            8.3.7. Busca explorar ou prejudicar crianças expondo-as a conteúdo
            inapropriado;
          </li>
          <li className="mb-2">
            8.3.8. Infrinja qualquer propriedade intelectual ou outro direito de
            pessoa ou entidade, incluindo violações de direitos autorais, marca
            registrada ou direitos de publicidade;
          </li>
          <li className="mb-2">
            8.3.9. Viola qualquer lei ou pode ser considerado para violar a lei;
          </li>
          <li className="mb-2">
            8.3.10. Personifique ou deturpe sua conexão com qualquer entidade ou
            pessoa, ou, ainda, manipula títulos ou identificadores para encobrir
            a origem do conteúdo;
          </li>
          <li className="mb-2">
            8.3.11. Promova qualquer empreendimento comercial (por exemplo,
            oferecer produtos ou serviços em promoção) ou que engaje de qualquer
            forma em uma atividade comercial (por exemplo, realizar sorteios ou
            concursos, expor banners patrocinados e/ou solicitar bens e
            serviços), exceto se expressamente autorizado neste site;
          </li>
          <li className="mb-2">
            8.3.12. Solicitar fundos, divulgações ou patrocinadores, exceto se
            expressamente autorizado neste site;
          </li>
          <li className="mb-2">
            8.3.13. Inclua programas com vírus, worms e/ou cavalos de tróia ou
            qualquer outro código, arquivo ou programa de computador destinado a
            interromper, destruir ou limitar a funcionalidade de qualquer
            software ou hardware de computador ou telecomunicações;
          </li>
          <li className="mb-2">
            8.3.14. Conseguem acompanhar ou mesmo agir de modo a afetar a
            habilidade de outras pessoas de se engajar em atividades em tempo
            real neste site;
          </li>
          <li className="mb-2">8.3.15. Inclua arquivos em formato MP3;</li>
          <li className="mb-2">8.3.16. Promova notícias falsas (fake news);</li>
          <li className="mb-2">
            8.3.17. Desobedeça a qualquer política ou regra estabelecida de
            tempos em tempos para o uso desse site ou qualquer rede conectada a
            ele;{' '}
          </li>
          <li className="mb-2">
            8.3.18. Contenha hiperlinks para sites com conteúdo que se enquadrem
            nas descrições acima.
          </li>
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="mb-2 text-2xl font-bold">9. Links de Terceiros</h2>
        <p className="mb-4">
          9.1. O Aplicativo pode conter links para sites ou serviços de
          terceiros que não são de nossa propriedade ou controlados por nós. Não
          temos controle e não assumimos nenhuma responsabilidade pelo conteúdo,
          políticas de privacidade ou práticas de quaisquer sites ou serviços de
          terceiros. Você reconhece e concorda que não somos responsáveis,
          direta ou indiretamente, por quaisquer danos ou perdas causados ou
          alegadamente causados por ou em conexão com o uso ou dependência de
          qualquer conteúdo, bens ou serviços disponíveis em ou através de tais
          sites ou serviços de terceiros.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="mb-2 text-2xl font-bold">10. Isenção de Garantias</h2>
        <p className="mb-4">
          10.1. O Aplicativo é fornecido &quot;no estado em que se
          encontra&quot; e &quot;conforme disponível&quot; sem garantias de
          qualquer tipo, expressas ou implícitas, incluindo, entre outras,
          garantias implícitas de comercialização, adequação a um propósito
          específico, não violação e curso de desempenho.
        </p>
        <p className="mb-4">
          10.2. Não garantimos que o Aplicativo estará disponível de forma
          ininterrupta ou livre de erros, que os defeitos serão corrigidos ou
          que o Aplicativo esteja livre de vírus ou outros componentes
          prejudiciais.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="mb-2 text-2xl font-bold">
          11. Limitação de Responsabilidade
        </h2>
        <p className="mb-4">
          11.1. Em nenhuma circunstância seremos responsáveis por quaisquer
          danos indiretos, incidentais, especiais, consequenciais ou punitivos,
          incluindo, entre outros, perda de lucros, dados, uso, boa vontade ou
          outras perdas intangíveis, decorrentes de ou relacionadas ao seu uso
          ou incapacidade de usar o Aplicativo, mesmo que tenhamos sido avisados
          da possibilidade de tais danos.
        </p>
        <p className="mb-4">
          11.2. Em nenhum caso, nossa responsabilidade total perante você por
          todos os danos (exceto conforme exigido pela lei aplicável em casos
          envolvendo responsabilidade por produto) excederá o valor total que
          você nos pagou, se houver, pelo Aplicativo.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="mb-2 text-2xl font-bold">12. Indenização</h2>
        <p className="mb-4">
          12.1. Você concorda em indenizar, defender e isentar a Quare Software
          e nossos diretores, executivos, funcionários, agentes, contratados,
          licenciadores, provedores de serviços e outros parceiros, de e contra
          todas e quaisquer reivindicações, perdas, responsabilidades, custos e
          despesas (incluindo honorários advocatícios) decorrentes de ou
          relacionados a (a) seu uso ou incapacidade de usar o Aplicativo, (b)
          seu Conteúdo do Usuário ou (c) sua violação destes Termos.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="mb-2 text-2xl font-bold">
          13. Lei Aplicável e Jurisdição
        </h2>
        <p className="mb-4">
          13.1. Estes Termos serão regidos e interpretados de acordo com as leis
          do Brasil, sem consideração a qualquer disposição de conflito de leis.
        </p>
        <p className="mb-4">
          13.2. Qualquer disputa decorrente de ou relacionada a estes Termos
          estará sujeita à jurisdição exclusiva dos tribunais localizados em
          Belo Horizonte, Minas Gerais no Brasil.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="mb-2 text-2xl font-bold">14. Rescisão</h2>
        <p className="mb-4">
          14.1. Podemos rescindir seu acesso ao Aplicativo, no todo ou em parte,
          a qualquer momento e por qualquer motivo, com ou sem aviso prévio, a
          nosso exclusivo critério.
        </p>
        <p className="mb-4">
          14.2. Você pode rescindir estes Termos interrompendo o uso do
          Aplicativo.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="mb-2 text-2xl font-bold">15. Disposições Gerais</h2>
        <p className="mb-4">
          15.1. Estes Termos constituem o acordo integral entre você e a Quare
          Software em relação ao Aplicativo e substituem todas as comunicações e
          propostas anteriores ou contemporâneas, sejam verbais ou escritas,
          entre você e a Quare Software.
        </p>
        <p className="mb-4">
          15.2. Se qualquer disposição destes Termos for considerada inexequível
          ou inválida, tal disposição será limitada ou eliminada na medida
          mínima necessária para que estes Termos permaneçam em pleno vigor e
          efeito. A falha em exercer ou fazer cumprir qualquer direito ou
          disposição destes Termos não constituirá uma renúncia a tal direito ou
          disposição.
        </p>
        <p className="mb-4">
          15.3. Estes Termos e quaisquer direitos e licenças concedidos nos
          termos deste documento não podem ser transferidos ou cedidos por você,
          mas podem ser cedidos por nós sem restrições.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="mb-2 text-2xl font-bold">16. Lei Brasileira</h2>
        <p className="mb-4">
          16.1. O aplicativo &quot;Bora Rachar&quot; está sujeito às leis
          brasileiras, incluindo, mas não se limitando ao Código de Defesa do
          Consumidor (Lei nº 8.078/1990). Em caso de conflito entre estes Termos
          de Serviço e a legislação brasileira, prevalecerá a legislação
          brasileira.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="mb-2 text-2xl font-bold">
          17. Código de Defesa do Consumidor
        </h2>
        <p className="mb-4">
          17.1. O usuário reconhece que o aplicativo &quot;Bora Rachar&quot; é
          um instrumento para facilitar a divisão de contas entre amigos e
          familiares, e que a responsabilidade pelo pagamento das despesas
          registradas no aplicativo é exclusivamente dos usuários que contraíram
          tais despesas. O aplicativo não se responsabiliza por eventuais
          dívidas entre os usuários, tampouco atua como intermediador ou garante
          o pagamento das despesas registradas.
        </p>
        <p className="mb-4">
          17.2. Em caso de dúvidas sobre seus direitos como consumidor, o
          usuário poderá consultar o Código de Defesa do Consumidor através do
          site do Governo Federal:{' '}
          <a
            href="https://www.planalto.gov.br/ccivil_03/leis/l8078compilado.htm"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-800 underline"
          >
            https://www.planalto.gov.br/ccivil_03/leis/l8078compilado.htm
          </a>
          .
        </p>
      </div>

      <div className="mb-6">
        <h2 className="mb-2 text-2xl font-bold">
          18. Alterações nestes Termos
        </h2>
        <p className="mb-4">
          18.1. Podemos atualizar estes Termos a qualquer momento, a nosso
          exclusivo critério. Se fizermos alterações materiais, notificaremos
          você publicando os Termos revisados no Aplicativo. Você é aconselhado
          a revisar estes Termos periodicamente para quaisquer alterações. O uso
          continuado do Aplicativo após a publicação dos Termos revisados
          constituirá sua aceitação de tais alterações.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="mb-2 text-2xl font-bold">19. Aspectos Gerais</h2>
        <p className="mb-4">
          19.1. Por meio da concordância ao presente Termo, o Usuário reconhece
          que, em qualquer hipótese, é o único responsável pela utilização do
          Aplicativo, isentando a Quare Software e todas as empresas por ela
          detidas, de qualquer responsabilidade por danos e prejuízos
          decorrentes do uso indevido do site e conteúdo correlato.
        </p>
        <p className="mb-4">
          19.3. A Quare Software não se responsabiliza pela exatidão das
          informações, pontualidade, comportamento dos Usuários e eventuais
          danos de qualquer natureza que estes venham causar a si ou à
          terceiros.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="mb-2 text-2xl font-bold">20. Idioma</h2>
        <p className="mb-4">
          20.1. Estes Termos de Serviço foram escritos originalmente em
          português (Brasil). Em caso de conflito entre a versão em português e
          qualquer tradução, prevalecerá a versão em português.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="mb-2 text-2xl font-bold">21. Contate-nos</h2>
        <p>
          21.1. Se você tiver alguma dúvida sobre estes Termos, entre em contato
          conosco pelo e-mail:{' '}
          <a
            href="mailto:appborarachar@gmail.com"
            className="text-blue-800 underline"
          >
            appborarachar@gmail.com
          </a>
          .
        </p>
      </div>

      <p className="mb-4">
        AO ACEITAR ESSE ACORDO VOCÊ ISENTA A EMPRESA DE QUALQUER CONSEQUÊNCIA
        RESULTANTE DE QUALQUER AÇÃO DA EMPRESA DURANTE OU COMO RESULTADO DE SUAS
        INVESTIGAÇÕES E/OU DE AÇÕES TOMADAS RESULTANTES DE INVESTIGAÇÕES TANTO
        DA EMPRESA QUANTO DAS AUTORIDADES DE JUSTIÇA COMPETENTES.
      </p>
    </div>
  )
}
