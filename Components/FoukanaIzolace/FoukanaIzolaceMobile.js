import MainScreen from "../UI/MainScreenMobile";
import {Table, Text} from "@mantine/core";
import BasicText from "../UI/BasicText";
import SubheaderText from "../UI/SubheaderText";
export default function FoukanaIzolaceMobile() {
    return (
        <div>
            <MainScreen label="Foukaná Izolace" image="/images/polystyrenestructure.jpg" />
            <div style={{ display: "flex", flexDirection: "column", padding: "3vh 5vw 3vh 5vw", height: "fitContent", width: "100%", textAlign: "center" }}>
                
                <BasicText>
                    Foukaná izolace patří mezi nejefektivnější variantu aplikace tepelných izolací. Foukaná izolace je vhodná k zateplení různých částí domu.
                </BasicText>
               <SubheaderText>
                Foukaná izolace - izolační materiál
                </SubheaderText>
                
                <BasicText>
                Pro foukanou izolaci používáme sypanou tepelnou izolaci. Polystyren sypaný je lehký, nezatěžuje konstrukce domu, má skvělé izolační vlastnosti, rychle ustupuje od ložiska ohně a nechutná hlodavcům viz další vlastnosti a přednosti.
                </BasicText>
               <SubheaderText>
                Foukaná izolace - možnosti použití
                </SubheaderText>
                <BasicText>
                Foukaná izolace lze použít do všech typů staveb od novostaveb, starších domů, dřevostaveb, nízkoenergetických a pasivních domů po haly, garáže a ostatní stavby.
                </BasicText>
                <BasicText>
                 Polystyren sypaný lze zafoukat do dutin v půdních prostorech, stropů, podlah, obvodových stěn, mezi krokve šikmých střech atd. Nemusíte složitě překládat střechu, stačí pouze vytvořit tzv. kapsu z netkané textílie, aby se izolace nevyfoukala ven.
                </BasicText>
               <SubheaderText>
                Foukaná izolace - cena
                </SubheaderText>
                <BasicText>Aplikaci foukané izolace Vám zajistíme u našich partnerů. Cena za aplikaci foukané izolace se skládá z ceny potřebného množství sypaného polystyrenu a z ceny za práci. Cena za práci se stanovuje individuálně na základě pracnosti zakázky.</BasicText>
                <BasicText>Máte-li zájem o foukanou izolaci pošlete nám poptávku přes poptávkový formulář a do kolonky "další specifikace poptávky“ napiště jednoduše foukaná izolace. Nebo stačí napsat dotaz na info@polystyrensypany.cz. Váš požadavek předáme našim partnerům, kteří Vám vypracují kalkulaci na foukanou izolaci dle vašich konkrétních požadavků.</BasicText>
               <SubheaderText>
                Foukaná izolace - svépomocí
                </SubheaderText>
                <BasicText>Foukaná izolace svépomocí je pro každého, kdo si chce provést zateplení sám.Tento způsob zateplení Vám přinese značnou úsporu nákladů. Nabízíme Vám zápůjčku foukacího stroje včetně příslušenství a zaškolení k aplikaci foukané izolace svépomocí.</BasicText>

               <SubheaderText>
                Cena zápůjčky stroje vč. příslušenství
                </SubheaderText>
                <Table>
                    <thead>
                        <tr>
                            <th>Množství sypaného polystyren</th>
                            <th>Cena bez DPH</th>
                            <th>Cena s DPH</th>
                        </tr>
                    </thead>
                    <tbody style={{ color: "#545454", fontWeight: "400" }}>
                        <tr>
                            <td>do 20,10m3</td>
                            <td>800,-Kč	</td>
                            <td>968,-Kč</td>
                        </tr>
                        <tr>
                        <td>20,11 - 45,00m3</td> 
                            <td>1.600,-Kč</td>
                            <td>1.936,-Kč</td>
                        </tr>
                        <tr>
                        <td>45,01 - 79,80m3</td> 
                            <td>2.400,-Kč</td>
                            <td>2.904,-Kč</td>
                        </tr>
                        <tr>
                        <td>nad 79,81m3</td> 
                            <td>neděle</td>
                            <td>neděle</td>
                        </tr>

                    </tbody>
                </Table>
            </div>
        </div>
    );
}
       
    
    