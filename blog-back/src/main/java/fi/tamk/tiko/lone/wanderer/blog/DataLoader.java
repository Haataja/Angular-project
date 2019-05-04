/*
Blog application that provides platform for blogging.
Copyright (C) 2019  Hanna Haataja <hanna.haataja@tuni.fi>

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program. If not, see <https://www.gnu.org/licenses/>.
 */
package fi.tamk.tiko.lone.wanderer.blog;

import fi.tamk.tiko.lone.wanderer.blog.blog.BlogPost;
import fi.tamk.tiko.lone.wanderer.blog.blog.BlogRepository;
import fi.tamk.tiko.lone.wanderer.blog.blog.Comment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.util.ArrayList;

@Component
public class DataLoader implements ApplicationRunner {

    private BlogRepository blogRepository;

    @Autowired
    public DataLoader(BlogRepository blogRepository) {
        this.blogRepository = blogRepository;
    }

    public void run(ApplicationArguments args) {
        ArrayList<BlogPost> list = new ArrayList<>();
        list.add(new BlogPost("Mieleni minun tekevi, aivoni ajattelevi\n" +
                "lähteäni laulamahan, saa'ani sanelemahan,\n" +
                "sukuvirttä suoltamahan, lajivirttä laulamahan.\n" +
                "Sanat suussani sulavat, puhe'et putoelevat,\n" +
                "kielelleni kerkiävät, hampahilleni hajoovat.\n" +
                "Veli kulta, veikkoseni, kaunis kasvinkumppalini!\n" +
                "Lähe nyt kanssa laulamahan, saa kera sanelemahan\n" +
                "yhtehen yhyttyämme, kahta'alta käytyämme!\n" +
                "Harvoin yhtehen yhymme, saamme toinen toisihimme\n" +
                "näillä raukoilla rajoilla, poloisilla Pohjan mailla.\n" +
                "Lyökämme käsi kätehen, sormet sormien lomahan,\n" +
                "lauloaksemme hyviä, parahia pannaksemme,\n" +
                "kuulla noien kultaisien, tietä mielitehtoisien,\n" +
                "nuorisossa nousevassa, kansassa kasuavassa:\n" +
                "noita saamia sanoja, virsiä virittämiä\n" +
                "vyöltä vanhan Väinämöisen, alta ahjon Ilmarisen,\n" +
                "päästä kalvan Kaukomielen, Joukahaisen jousen tiestä,\n" +
                "Pohjan peltojen periltä, Kalevalan kankahilta.\n","Katkelma 1. runosta", "Kalevala"));
        list.add(new BlogPost("Ne varsin valehtelevat,\n" +
                "Tuiki tyhjeä panevat,\n" +
                "Jotka soittoa sanovat,\n" +
                "Arvelevat kanteletta\n" +
                "Väinämöisen veistämäksi,\n" +
                "Jumalan kuvoamaksi,\n" +
                "Hauin suuren hartioista,\n" +
                "Veen koiran koukkuluista;\n\n" +
                "Soitto on suruista tehty,\n" +
                "Murehista muovaeltu:\n" +
                "Koppa päivistä kovista,\n" +
                "Emäpuu ikipoloista,\n" +
                "Kielet kiusoista kerätty,\n" +
                "Naulat muista vastuksista.\n\n" +
                "Sentä ei soita kanteleni,\n" +
                "Ei iloitse ensinkänä,\n" +
                "Soitto ei soita suosioksi,\n" +
                "Laske ei laatuista iloa,\n" +
                "Kun on huolista kuvattu,\n" +
                "Murehista muovaeltu.","Eriskummainen kantele","Kanteletar"));
        list.add(new BlogPost("Vaka vanha Väinämöinen otti ruskean orihin, \n" +
                "pani varsan valjahisin, ruskean re'en etehen; \n" +
                "itse reuoikse rekehen, kohennaikse korjahansa.\n" +
                "Laski virkkua vitsalla, helähytti helmisvyöllä; \n" +
                "virkku juoksi, matka joutui, reki vieri, tie lyheni, \n" +
                "jalas koivuinen kolasi, vemmel piukki pihlajainen.\n" +
                "Ajavi karettelevi. Ajoi soita, ajoi maita, \n" +
                "ajoi aavoja ahoja. Kulki päivän, kulki toisen, \n" +
                "niin päivällä kolmannella tuli pitkän sillan päähän, \n" +
                "Kalevalan kankahalle, Osmon pellon pientarelle.\n" +
                "Siinä tuon sanoiksi virkki, itse lausui ja pakisi: \n" +
                "\"Syö, susi, unennäkijä, tapa, tauti, lappalainen! \n" +
                "Sanoi ei saavani kotihin enämpi elävin silmin \n" +
                "sinä ilmoisna ikänä, kuuna kullan valkeana \n" +
                "näille Väinölän ahoille, Kalevalan kankahille.\"\n" +
                "Siitä vanha Väinämöinen laulelevi, taitelevi: \n" +
                "lauloi kuusen kukkalatvan, kukkalatvan, kultalehvän; \n" +
                "latvan työnti taivahalle, puhki pilvien kohotti, \n" +
                "lehvät ilmoille levitti, halki taivahan hajotti.\n" +
                "Laulelevi, taitelevi: lauloi kuun kumottamahan \n" +
                "kultalatva-kuusosehen, lauloi oksillen otavan.\n" +
                "Ajavi karettelevi kohti kullaista kotia, \n" +
                "alla päin, pahoilla mielin, kaiken kallella kypärin, \n" +
                "kun oli seppo Ilmarisen, takojan iän-ikuisen, \n" +
                "luvannut lunastimeksi, oman päänsä päästimeksi \n" +
                "pimeähän Pohjolahan, summahan Sariolahan.","Katkelma 10. runosta","Kalevala"));
        list.add(new BlogPost("Ikävät on illat pitkät,\n" +
                "Apiat on aamuseni,\n" +
                "Ikävät on yötki mulla,\n" +
                "Ajat kaikki katkerimmat.\n" +
                "Ei ikävä iltaistani,\n" +
                "Ei apia aamuistani,\n" +
                "Muret muita aikojani;\n" +
                "Ihanaistani ikävä,\n" +
                "Apiainen armaistani,\n" +
                "Mure mustakulmaistani\n\n" +
                "Ei mun kuulu kullaistani,\n" +
                "Näy ei näätärintoani,\n" +
                "Ei kuulu kujassa käyvän,\n" +
                "Alla ikkunan ajavan,\n" +
                "Pilkkovan pinolla puita,\n" +
                "Koan eessä kolkehtivan;\n\n" +
                "Maassa marjani makaavi,\n" +
                "Mullassa muhaelevi,\n" +
                "Alla hiekan herttaseni,\n" +
                "Kulon alla kultaseni.","Maassa marjani maakavi","Kanteletar"));
        list.add(new BlogPost("Louhi, Pohjolan emäntä, tuop' on tuohon vastaeli: \n" +
                "\"Enpä tieä poikoasi, kunne kulki ja katosi. \n" +
                "Istutin oron rekehen, korjahan kovan tulisen; \n" +
                "oisko uhkuhun uponnut, meren jäälle jähmettynyt \n" +
                "vai saanut sutosen suuhun, karhun kauhean kitahan?\"\n" +
                "Sanoi äiti Lemminkäisen: \"Jo vainen valehtelitki! \n" +
                "Susi ei syö minun sukua, karhu ei kaa'a Lemminkäistä: \n" +
                "sormin sortavi sutoset, käsin karhut kaatelevi. \n" +
                "Kunp' on et sanone tuota, kunne saatoit Lemminkäisen, \n" +
                "rikon uksen uuen riihen, taitan sampuen sarahat.\"\n" +
                "Sanoi Pohjolan emäntä: \"Syötin miehen syöneheksi, \n" +
                "juotin miehen juoneheksi, apatin alanenäksi; \n" +
                "istutin venon perähän, laitoin kosket laskemahan. \n" +
                "Enkä tuota tunnekana, kunne sai katala raukka, \n" +
                "koskihinko kuohuvihin, virtoihin vipajavihin.\"\n" +
                "Sanoi äiti Lemminkäisen: \"Jo vainen valehtelitki! \n" +
                "Sano tarkkoja tosia, valehia viimeisiä, \n" +
                "kunne saatoit Lemminkäisen, kaotit kalevalaisen, \n" +
                "taikka surmasi tulevi, kuolemasi kohtoavi!\"\n" +
                "Sanoi Pohjolan emäntä: \"Jospa jo sanon toenki: \n" +
                "panin hirvet hiihtämähän, jalopeurat jaksamahan, \n" +
                "ruunat suuret suistamahan, varsat valjastuttamahan; \n" +
                "laitoin joutsenen hakuhun, pyhän linnun pyyäntähän. \n" +
                "Nyt en tuota tunnekana, mi on tullunna tuhoksi, \n" +
                "esteheksi ennättännä, kun ei kuulu jo tulevan \n" +
                "morsianta pyytämähän, tyttöä anelemahan.\"","Katkelma 15. runosta","Kalevala"));
        list.add(new BlogPost("Meren neito, metsän sulho, \n" +
                "korven korkea senikka, \n" +
                "mieltä yhtehen pitivät, \n" +
                "yhtehen ajattelivat.\n" +
                "\n" +
                "Yli metsän mielet käyvät,\n" +
                "läpi korven tien tekevät,\n" +
                "puhki metsän heijapuisen,\n" +
                "kautta korven kuusamisen,\n" +
                "kautta kankahan pajuisen,\n" +
                "läpi rantaisen risikon.\n" +
                "\n" +
                "Korven korkea senikka, \n" +
                "tuo mieli merosta naia, \n" +
                "tahtoi lasta lainehesta, \n" +
                "meron nuorta neltokaista,\n" +
                "kuohun korkean tytärtä, \n" +
                "lasta vaahen valkiaisen.\n" +
                "\n" +
                "Metsän sulho, mies verevä, \n" +
                "korven korkea senikka, \n" +
                "otti tallista orihin,\n" +
                "valjasti valion varsan \n" +
                "vaskisihin valjahisin, \n" +
                "hopiaisihin helyihin, \n" +
                "ajoi rannalle merosen \n" +
                "rautaisilla rattahilla,\n" +
                "tahtoi tyttöä merosta, \n" +
                "kosi lasta lainehesta.\n" +
                "\n" +
                "Noin sanoi merosta neito,\n" +
                "lausui lapsi lainehesta:\n" +
                "”Oi sie suuri metsän sulho,\n" +
                "korven korkea senikka, \n" +
                "sie vain mielinet minua, \n" +
                "jopa ollet ottamassa \n" +
                "valiolla varsallasi, \n" +
                "rautaisilla rattahilla,\n" +
                "vaskisilla valjahilla, \n" +
                "hopeaisilla helyillä. \n" +
                "\n" +
                "Ken mielii merosta naia, \n" +
                "meren piikoja piellä, \n" +
                "ei sille piä rekoa\n" +
                "eikä rautarattahia \n" +
                "eikä ostanta-oroa \n" +
                "eikä vaskivaljahia. \n" +
                "\n" +
                "Neito aalloissa ajavi, \n" +
                "ve’en pinnassa pitävi,\n" +
                "vesi neitosen vetävi, \n" +
                "laine lapsen lennättävi, \n" +
                "veto alla, tuulo päällä, \n" +
                "neito keskellä asuvi.”","Meren neito ja metsän sulho","Kanteletar"));
        BlogPost kalevala = new BlogPost("Sanoi seppo Ilmarinen: \"Oisi tuo sorea neito, \n" +
                "kun oisi sanallisena, mielellisnä, kielellisnä.\"\n" +
                "Saattoi siitä neitosensa utuisehen uutimehen, \n" +
                "pehme'ille pääaloille, sulkkuisille vuotehille.\n" +
                "Siitä seppo Ilmarinen lämmitti kylyn utuisen, \n" +
                "laati saunan saipuaisen; vastat varpaiset varusti, \n" +
                "vettä kolme korvollista, jolla peiponen peseikse, \n" +
                "pulmunen puhasteleikse noista kullan kuonasista.\n" +
                "Kylpi seppo kyllitellen, valelihe vallotellen. \n" +
                "Neien vierehen venähti utuisehen uutimehen, \n" +
                "teltahan teräksisehen, rankisehen rautaisehen.\n" +
                "Siinä seppo Ilmarinen heti yönä ensimäisnä \n" +
                "kyllä peitettä kysyvi, vaippoja varustelevi, \n" +
                "kahet, kolmet karhuntaljat, viiet kuuet villavaipat, \n" +
                "maata kera puolisonsa, tuon on kultaisen kuvansa.\n" +
                "Se oli kylki kyllä lämmin, ku oli vasten vaippojansa; \n" +
                "ku oli nuorta neittä vasten, vasten kullaista kuvoa, \n" +
                "se oli kylki kylmimässä, oli hyyksi hyytymässä, \n" +
                "meren jääksi jäätymässä, kiveksi kovoamassa.\n" +
                "Sanoi seppo Ilmarinen: \"Ei tämä hyvä minulle! \n" +
                "Vienen neien Väinölähän Väinämöiselle varaksi, \n" +
                "polviseksi puolisoksi, kainaloiseksi kanaksi.\"\n" +
                "Viepi neien Väinölähän. Sitte sinne tultuansa \n" +
                "sanan virkkoi, noin nimesi: \"Oi sie vanha Väinämöinen! \n" +
                "Tuossa on sinulle tyttö, neiti kaunis katsannolta, \n" +
                "eik' ole suuri suun piolta, kovin leuoilta leveä.\"\n" +
                "Vaka vanha Väinämöinen katsahti kuvoa tuota, \n" +
                "luopi silmät kullan päälle. Sanan virkkoi, noin nimesi: \n" +
                "\"Miksi toit minulle tuota, tuota kullan kummitusta?\"\n" +
                "Sanoi seppo Ilmarinen: \"Miksi muuksi kuin hyväksi! \n" +
                "Polviseksi puolisoksi, kainaloiseksi kanaksi.\"\n" +
                "Sanoi vanha Väinämöinen: \"Oi on seppo veikkoseni! \n" +
                "Tunge neitosi tulehen, tao kaikiksi kaluiksi, \n" +
                "tahi vie Venäehelle, saata Saksahan kuvasi \n" +
                "rikkahien riian naia, suurien soan kosia! \n" +
                "Ei sovi minun su'ulle, ei minullen itselleni \n" +
                "naista kullaista kosia, hope'ista huolitella.\"\n" +
                "Siitä kielti Väinämöinen, epäsi suvannon sulho, \n" +
                "kielti kansan kasvavaisen, epäsi yleneväisen \n" +
                "kullalle kumartamasta, hopealle horjumasta. \n" +
                "Sanovi sanalla tuolla, lausui tuolla lausehella: \n" +
                "\"Elkätte, pojat poloiset, vasta kasvavat urohot, \n" +
                "ollette elonkeraiset elikkä elottomatki, \n" +
                "sinä ilmoisna ikänä, kuuna kullan valkeana \n" +
                "naista kullaista kosiko, hope'ista huolitelko! \n" +
                "Kylmän kulta kuumottavi, vilun huohtavi hopea.\"", "Katkelma 37. runosta", "Kalevala",
                new Comment("Very good poem this is.","good","Seppo Ilmarinen"),
                new Comment("Did not like","did not like","Maiden of the north"),
                new Comment("Too long, add tl:dr please.","Too long","Did not read"));

        list.add(kalevala);
        list.add(new BlogPost(" \"Mie olen hirven hiihannassa,\n" +
                "Jalopeuran jaksannassa,\n" +
                "Kaikk' on kenkäni kulunna,\n" +
                "Näitä teitä juostessani,\n" +
                "Samotessani saloja;\n" +
                "Onko hirviä salossa,\n" +
                "Onko nähty näillä mailla?\"--\n" +
                "\n" +
                "\"Onpa hirviä salossa,\n" +
                "Onpa nähty näillä mailla,\n" +
                "Oiva hirvi liinaharja;\n" +
                "Täss' on käynyt tään kesosen\n" +
                "Meiän herran heinikossa,\n" +
                "Nähty on kanssa kaalimaassa.\n" +
                "\n" +
                "Paljo on pahoa tehnyt,\n" +
                "Syönyt heinät, maannut marjat,\n" +
                "Kaikki kaalinpäät kalunna,\n" +
                "Jost' on vaikia valitus\n" +
                "Ylitse koko kylämme.\n" +
                "Tapa kohta, kun tavannet,\n" +
                "Lyö'pä päähän, kun sa löyät,\n" +
                "Noua häntä nuolellasi,\n" +
                "Jouahuta jousellasi,\n" +
                "Tahi laske laahingille,\n" +
                "Pyyä pyssysi keralla!\"","Hirvenhiihanta","Kanteletar"));
        list.add(new BlogPost("\"Jo oisi minulla aika näiltä ilmoilta eritä,\n" +
                "aikani Manalle mennä, ikä tulla Tuonelahan:\n" +
                "ei minua isoni itke, ei emo pane pahaksi,\n" +
                "ei kastu sisaren kasvot, veikon silmät vettä vuoa,\n" +
                "vaikka vierisin vetehen, kaatuisin kalamerehen\n" +
                "alle aaltojen syvien, päälle mustien murien.\"\n" +
                "Astui päivän, astui toisen. Päivänäpä kolmantena\n" +
                "ennätti meri etehen, ruokoranta vastahansa:\n" +
                "tuohon yöhyt yllättävi, pimeä piättelevi.\n" +
                "Siinä itki impi illan, kaikerteli kaiken yötä\n" +
                "rannalla vesikivellä, laajalla lahen perällä.\n" +
                "Aamulla ani varahin katsoi tuonne niemen päähän:\n" +
                "kolme oli neittä niemen päässä ... ne on merta\n" +
                "kylpemässä!\n" +
                "Aino neiti neljänneksi, vitsan varpa viienneksi!\n" +
                "Heitti paitansa pajulle, hamehensa haapaselle,\n" +
                "sukkansa sulalle maalle, kenkänsä vesikivelle,\n" +
                "helmet hietarantaselle, sormukset somerikolle.\n" +
                "Kivi oli kirjava selällä, paasi kullan paistavainen:\n" +
                "kiistasi kivellen uia, tahtoi paaelle paeta.\n" +
                "Sitte sinne saatuansa asetaiksen istumahan\n" +
                "kirjavaiselle kivelle, paistavalle paaterelle:\n" +
                "kilahti kivi vetehen, paasi pohjahan pakeni,\n" +
                "neitonen kiven keralla, Aino paaen palleassa.\n" +
                "Siihenpä kana katosi, siihen kuoli impi rukka.\n" +
                "Sanoi kerran kuollessansa, virkki vielä vierressänsä:\n" +
                "\"Menin merta kylpemähän, sainp' on uimahan selälle;\n" +
                "sinne mä, kana, katosin, lintu, kuolin liian surman:\n" +
                "elköhön minun isoni sinä ilmoisna ikänä\n" +
                "vetäkö ve'en kaloja tältä suurelta selältä!","Katkelma 4. runosta","Kalevala"));
        list.add(new BlogPost("Mik' otti isolta mielen,\n" +
                "Kuka kummanen emolta,\n" +
                "Leskelle minun lupasi,\n" +
                "Tahtoi toisen tähtehille.\n" +
                "\n" +
                "Lempo leskelle menevi,\n" +
                "Tuoni toisen tähtehille;\n" +
                "Parempi pajuilla maata,\n" +
                "Lepän oksilla levätä,\n" +
                "Kun on lesken vuotehella,\n" +
                "Pieluksilla pietyn naisen--\n" +
                "Armahampi aitovieri,\n" +
                "Kun on lesken kylkipuoli;\n" +
                "Leppiämpi lehtovieri,\n" +
                "Kun on lesken vuoetvieri.\n" +
                "\n" +
                "Lempo leskelle menevi,\n" +
                "Kalma naijalle kahesti;\n" +
                "Leskell' on kovempi kopra,\n" +
                "Kun on kuiva kuusen oksa,\n" +
                "Jolla lyöpi leikkilöistä,\n" +
                "Nappajavi nauruloista--\n" +
                "Leski on leikkinsä pitänyt,\n" +
                "Viettänyt iloisen illan,\n" +
                "Entisen eläjän kanssa,\n" +
                "Miehen mennehen keralla.\n" +
                "\n" +
                "Lempo leskelle menevi,\n" +
                "Tauti taljan maannehelle;\n" +
                "Levitetty on lesken vuoe,\n" +
                "Lesken talja tallaeltu.\n" +
                "Saan minä kiveltä kielen,\n" +
                "Kuulen paaelta pakinan--\n" +
                "Kivi kerran kirkasevi,\n" +
                "Paasi toisen parkasevi,\n" +
                "Lesken on leukansa lukossa,\n" +
                "Koko suunsa sulkehessa.","Lempo leskelle menevi","Kanteletar"));
        blogRepository.saveAll(list);
    }


}