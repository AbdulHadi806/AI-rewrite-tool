import React from 'react'
import type { Metadata } from "next";
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export const metadata: Metadata = {
    title: "Politica de Privacidade",
    description: "Reescrever texto online: parafraseie textos facilmente com nossa poderosa ferramenta online. Melhore a clareza, evite o plágio e aprimore sua escrita em segundos.",
};

function privacyPolicy() {
    return (
        <>
            <Header />
            <div className="container py-10">
                <h1 className="text-2xl font-semibold mb-5">Política de Privacidade</h1>
                <p className="text-md mb-2">
                    Reescrevertexto.online fornece uma ferramenta para reescrever textos utilizando a API Gemini. Este serviço é oferecido gratuitamente e é mantido por meio de anúncios.
                </p>
                <p className="text-md mb-2">
                    Esta página tem como objetivo informar os visitantes sobre nossas políticas em relação à coleta, uso e divulgação de informações pessoais para quem decidir utilizar nosso Serviço.
                </p>

                <p className="text-md mb-2">
                    Ao optar por utilizar nosso Serviço, você concorda com a coleta e uso das informações conforme descrito nesta política. As informações pessoais coletadas são utilizadas para melhorar o Serviço. Não compartilharemos suas informações com terceiros, exceto conforme descrito nesta Política de Privacidade.
                </p>

                <p className="text-md mb-2">
                    Os termos usados nesta Política de Privacidade têm os mesmos significados que nos nossos Termos e Condições, a menos que definido de outra forma nesta política.
                </p>

                <h2 className="text-xl text-black font-medium my-3">Coleta e Uso de Informações</h2>
                <p className="text-md mb-2">
                    Para melhorar a experiência do usuário, podemos solicitar algumas informações pessoais, como endereço de e-mail. As informações fornecidas serão usadas conforme descrito nesta Política de Privacidade.
                </p>

                <p className="text-md mb-2">
                    Nosso aplicativo utiliza serviços de terceiros que podem coletar informações para identificá-lo.
                </p>

                <h3 className="text-lg font-medium my-2">Serviços de Terceiros</h3>
                <p className="text-md mb-2">
                    O aplicativo pode incluir serviços de terceiros, como o Google, que utilizam cookies para fornecer anúncios com base em suas visitas anteriores ao nosso site ou a outros sites.
                </p>
                <ul className="text-md text-black list-disc list-inside my-2">
                    <li>
                        Terceiros, incluindo o Google, utilizam cookies para exibir anúncios com base em visitas anteriores do usuário.
                    </li>
                    <li>
                        O uso de cookies de publicidade pelo Google permite que ele e seus parceiros exibam anúncios com base nas visitas do usuário a diferentes sites.
                    </li>
                    <li>
                        Os usuários podem desativar a publicidade personalizada nas Configurações de Anúncios do Google.
                    </li>
                </ul>

                <h2 className="text-xl text-black font-medium my-3">Cookies</h2>
                <p className="text-md mb-2">
                    Cookies são pequenos arquivos de dados que podem ser usados como identificadores anônimos. Eles são enviados ao seu navegador pelos sites que você visita e são armazenados em seu dispositivo.
                </p>

                <p className="text-md mb-2">
                    Embora nosso Serviço não utilize cookies diretamente, o aplicativo pode incluir bibliotecas de terceiros que utilizam cookies para coletar informações e melhorar a experiência do usuário. Você pode optar por aceitar ou recusar esses cookies.
                </p>

                <p className="text-md mb-2">
                    Utilizamos serviços de terceiros para monetização do site. Você pode revisar suas políticas de privacidade e cookies diretamente nos sites desses provedores.
                </p>

                <h3 className="text-lg font-medium my-2">Provedores de Serviço</h3>
                <p className="text-md mb-2">
                    Podemos contratar empresas ou indivíduos terceirizados para nos ajudar a oferecer nosso Serviço:
                </p>
                <ul className="text-md text-black list-disc list-inside my-2">
                    <li>Para facilitar o uso do Serviço;</li>
                    <li>Para fornecer o Serviço em nosso nome;</li>
                    <li>Para realizar serviços relacionados ao Serviço; ou</li>
                    <li>Para nos ajudar a analisar o uso do nosso Serviço.</li>
                </ul>
                <p className="text-md mb-2">
                    Esses terceiros têm acesso às suas informações pessoais apenas para realizar as tarefas em nosso nome e são obrigados a não utilizá-las para qualquer outro propósito.
                </p>

                <h3 className="text-lg font-medium my-2">Segurança</h3>
                <p className="text-md mb-2">
                    Valorizamos a sua confiança em nos fornecer suas informações pessoais e estamos comprometidos em usar meios comercialmente aceitáveis para protegê-las. No entanto, nenhum método de transmissão pela internet ou armazenamento eletrônico é 100% seguro e não podemos garantir segurança absoluta.
                </p>

                <h3 className="text-lg font-medium my-2">Links para Outros Sites</h3>
                <p className="text-md mb-2">
                    Este Serviço pode conter links para outros sites. Se você clicar em um link de terceiros, será direcionado para esse site. Recomendamos que revise a Política de Privacidade desses sites, pois não temos controle sobre eles e não somos responsáveis por suas práticas.
                </p>

                <h3 className="text-lg font-medium my-2">Privacidade Infantil</h3>
                <p className="text-md mb-2">
                    Nosso Serviço não é destinado a menores de 13 anos. Não coletamos intencionalmente informações pessoais de crianças com menos de 13 anos. Se descobrirmos que uma criança menor de 13 anos nos forneceu informações pessoais, tomaremos medidas para removê-las de nossos registros.
                </p>
            </div>

            <Footer />

        </>
    )
}

export default privacyPolicy