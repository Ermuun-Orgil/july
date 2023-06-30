import { Box, Stack, Typography } from "@mui/material";
import Image from 'next/image'
import julyImg from "../../assets/illustrations/july.JPG";
import gamma from "../../assets/illustrations/gamma.jpeg";
import injinaash from "../../assets/illustrations/injinaash.jpeg";
import elbegzaya from "../../assets/illustrations/elbe.jpeg";
import byambaochir from "../../assets/illustrations/byambaochir.jpeg";
import nymagerel from "../../assets/illustrations/nymgerel.jpeg";
import davaanym from "../../assets/illustrations/davaanaa.jpg";
import { useEffect, useState } from "react";

const jul = "../../assets/illustrations/july.JPG";

export const Home = () => {
  const [screenType, setScreenType] = useState("")

  useEffect(() => {
    const screenWidth = window.innerWidth;
    setScreenType(screenWidth > 800 ? "window" : "mobile")
  }, [])
  // const julyImg = "../../assets/illustrations/july.JPG"
  const julyScript = "Өдгөөгөөс 15 жилийн өмнөх 7 сарын 1-ний өдөр монголын түүхэнд “хар”-аар бичигдэн үлдсэн билээ. Ардчиллын төлөө өгсөн саналаа нэхсэн залуус тухайн үеийн төр, засаг, цэрэг, цагдаатай тэмцэлдэн, сүүлдээ хууль хүчний өмнө буруутан болж дууссан. Таван залуу алтан амиа алдаж, олон зуун залуус хэрэгтэн болж торны цаана хоригдсон. Энэ түүхэн үнэнийг нэмэлт хачиргүй, хар цагаангүй хүүрнэж чадах ганц зүйл нь гэрэл зураг юм. Гамма агентлагийн гэрэл зургчдын зургуудыг та бүхэнд дэлгэж байна. Та хаана байсан бэ? Өөрийгөө олоорой."
  const gammaScript1 = "Урьд шөнө хар дарж зүүдэллээ…"
  const gammaScript2 = "Ардчиллын сүлд дуулал болсон С.Цогтсайханы “Хонхны дуу” ингэж эхэлдэг."
  const gammaScript3 = "Үнэхээр л бид хар дарсан зүүднээсээ арай ядан сэрэв үү гэмээр байна. Хэний ч хүсээгүй “ХАР МЯГМАР ГАРИГ” буюу 2008.07.01-ний хар өдөр нэгэнт болоод өнгөрчээ!"
  const gammaScript4 = "Гэхдээ бид мартах ёсгүй."
  const gammaScript5 = "Энэ өдөр биднийг СЭРЭМЖТЭЙ БАЙХЫГ “ӨГЛӨӨ БОЛГОН” үргэлж санууж байх болно!"
  const gammaScript6 = "Тийм гэгээн зорилгоор гэрэл зургийн “Гамма” агентлагийн залуу гэрэл зурагчид болох Т.Бямба-Очир, Б.Инжинааш, Д.Давааням, Б.Нямгэрэл, Л.Элбэгзаяа нарын үйл явдлын халуун цэг дээр авсан гэрэл зургуудыг та бүхэнд толилуулж байна."
  const gammaScript7 = "Өөр өөрсдийнхөө оюун ухаанд тунгаацгаая!"
  const book = "2008 онд хэвлэгдсэн БҮҮ МАРТ номны хэсгээс"
  const tsogtbayrName = "Шог зураач С.Цогтбаяр"
  const elbegzayaName = "Гамма агентлагийн гүйцэтгэх захирал Л.Элбэгзаяа"
  // const purpose = "Сайн байцгаана уу эрхэм уншигч, гэрэл зургийн хорхойтнуудаа. Манай баг хамт олон нь Монголын түүхийг гэрэл зургийн хальсанд буулгаж яваа "Гамма агентлаг"-тай хамтран “Түүхийн толь” гэх төслөө өнөөдөр та бүхэнд хүрч буй энэхүү “БҮҮ МАРТ” үзэсгэлэнгээр эхэлж байна. Бид бүгд өнгөрсөн алдаанаасаа суралцаж, хийж бүтээснээрээ бахархан амьдардаг билээ. Бид төслөө өнөөгийн залуустаа эцэг эх нь юун дээр алдаж, бидний төлөө юуг бүтээн тэмцэж явсныг ямар нэгэн нэмэлт хачиргүйгээр хүргэж та бүхэн минь 1-ийг тунгаан 2-ийг ойлгоосой гэж хүсэн эхлүүлж байгаа билээ. Энэ төсөлд багтаж байгаа бүх зураг нь “Гамма агентлаг”-ийн өмч бөгөөд хэрвээ хувьдаа болон өөр зүйлд ашиглахыг хүсвэл 91903937, 90262021 гэсэн дугаарууд руу залгах худалдан авах бүрэн боломжтой гэдгийг хэлэхэд таатай байна. Таалан сонирхоно уу.";

  return (
    <Box paddingX={5} paddingTop={18} paddingBottom={8}>
      <Box>
        <Stack spacing={8}>
          <Box>
            <Typography textAlign={"center"} fontSize={16} fontFamily={"Lora"} flex={1}>Сайн байцгаана уу эрхэм уншигч, гэрэл зургийн хорхойтнуудаа. Манай баг хамт олон нь Монголын түүхийг гэрэл зургийн хальсанд буулгаж яваа "Гамма агентлаг"-тай хамтран “Түүхийн толь” гэх төслөө өнөөдөр та бүхэнд хүрч буй энэхүү “БҮҮ МАРТ” үзэсгэлэнгээр эхэлж байна. Бид бүгд өнгөрсөн алдаанаасаа суралцаж, хийж бүтээснээрээ бахархан амьдардаг билээ. Бид төслөө өнөөгийн залуустаа эцэг эх нь юун дээр алдаж, бидний төлөө юуг бүтээн тэмцэж явсныг ямар нэгэн нэмэлт хачиргүйгээр хүргэж та бүхэн минь 1-ийг тунгаан 2-ийг ойлгоосой гэж хүсэн эхлүүлж байгаа билээ. Энэ төсөлд багтаж байгаа бүх зураг нь “Гамма агентлаг”-ийн өмч бөгөөд хэрвээ хувьдаа болон өөр зүйлд ашиглахыг хүсвэл 91903937, 90262021 гэсэн дугаарууд руу залгах худалдан авах бүрэн боломжтой гэдгийг хэлэхэд таатай байна. Таалан сонирхоно уу.</Typography>
          </Box>
          <Box display={"flex"} justifyContent={"center"}>
            <Box width={"65%"} borderTop={1} />
          </Box>
          <Stack spacing={5} direction={screenType === "window" ? "row" : "column"} flexWrap={"wrap"} useFlexGap display={"flex"} justifyContent={"center"} >
            <Box position={"relative"} height={screenType === "mobile" ? 210 : 500} width={screenType === "window" ? "65%" : "100%"}>
              <Image className="home-image" alt="july" src={julyImg} fill style={{ objectFit: "scale-down" }} />
            </Box>
            <Box flex={1}>
              <Typography fontSize={18} fontFamily={"Lora"} flex={1}>{julyScript}</Typography>
              <br />
              <Typography fontSize={18} flex={1} fontWeight={600}>{elbegzayaName}</Typography>
            </Box>
          </Stack>

          <Box display={"flex"} justifyContent={"center"}>
            <Box width={"65%"} borderTop={1} />
          </Box>

          <Stack spacing={screenType === "window" ? 8 : 4} direction={screenType === "window" ? "row" : "column"} flexWrap={"wrap"} useFlexGap>
            {screenType === "window" ?
              <>
                <Box flex={1}>
                  <Typography fontSize={18} fontFamily={"Lora"} flex={1}>{gammaScript1}</Typography>
                  <Typography fontSize={18} fontFamily={"Lora"} flex={1}>{gammaScript2}</Typography>
                  <br />
                  <Typography fontSize={18} fontFamily={"Lora"} flex={1}>{gammaScript3}</Typography>
                  <br />
                  <Typography fontSize={18} fontFamily={"Lora"} flex={1}>{gammaScript4}</Typography>
                  <br />
                  <Typography fontSize={18} fontFamily={"Lora"} flex={1}>{gammaScript5}</Typography>
                  <br />
                  <Typography fontSize={18} fontFamily={"Lora"} flex={1}>{gammaScript6}</Typography>
                  <br />
                  <Typography fontSize={18} fontFamily={"Lora"} flex={1}>{gammaScript7}</Typography>
                  <br />
                  <Typography fontSize={18} flex={1}>{book}</Typography>
                  <Typography fontSize={18} flex={1} fontWeight={600}>{tsogtbayrName}</Typography>
                </Box>
                <Box position={"relative"} height={500} width={"50%"}>
                  <Image className="home-image" alt="july" src={gamma} fill style={{ objectFit: "scale-down" }} />
                </Box>
              </> :
              <>
                <Box position={"relative"} height={210} width={"100%"}>
                  <Image className="home-image" alt="july" src={gamma} fill style={{ objectFit: "scale-down" }} />
                </Box>
                <Box flex={1}>
                  <Typography fontSize={18} flex={1}>{gammaScript1}</Typography>
                  <Typography fontSize={18} flex={1}>{gammaScript2}</Typography>
                  <br />
                  <Typography fontSize={18} flex={1}>{gammaScript3}</Typography>
                  <br />
                  <Typography fontSize={18} flex={1}>{gammaScript4}</Typography>
                  <br />
                  <Typography fontSize={18} flex={1}>{gammaScript5}</Typography>
                  <br />
                  <Typography fontSize={18} flex={1}>{gammaScript6}</Typography>
                  <br />
                  <Typography fontSize={18} flex={1}>{gammaScript7}</Typography>
                  <br />
                  <Typography fontSize={18} flex={1}>{book}</Typography>
                  <Typography fontWeight={600} fontSize={18} flex={1}>{tsogtbayrName}</Typography>
                </Box>
              </>
            }
          </Stack>

          <Box display={"flex"} justifyContent={"center"}>
            <Box width={"65%"} borderTop={1} />
          </Box>

          <Stack direction={"row"} spacing={10} flexWrap={"wrap"} useFlexGap display={"flex"} alignItems={"center"}>
            <Box flex={1} display={"flex"} flexDirection={"column"} alignItems={"center"}>
              <Image alt={"injinaash"} src={injinaash} width={150} />
              <Typography textAlign={"center"} fontSize={18} marginTop={2}>Чөлөөт уран бүтээлч</Typography>
              <Typography textAlign={"center"} fontWeight={600} fontSize={18} marginTop={2}>Б.Инжинааш</Typography>
            </Box>
            <Box flex={1} display={"flex"} flexDirection={"column"} alignItems={"center"}>
              <Image alt={"byambaochir"} src={byambaochir} width={150} />
              <Typography textAlign={"center"} fontSize={18} marginTop={2}>Чөлөөт уран бүтээлч</Typography>
              <Typography textAlign={"center"} fontWeight={600} fontSize={18} marginTop={2}>Т.Бямба-Очир</Typography>
            </Box>
            <Box flex={1} display={"flex"} flexDirection={"column"} alignItems={"center"}>
              <Image alt={"nymgerel"} src={nymagerel} width={150} />
              <Typography textAlign={"center"} fontSize={18} marginTop={2}>Гамма агентлагийн уран бүтээлч</Typography>
              <Typography textAlign={"center"} fontWeight={600} fontSize={18} marginTop={2}>Б.Нямгэрэл</Typography>
            </Box>
            <Box flex={1} display={"flex"} flexDirection={"column"} alignItems={"center"}>
              <Image alt={"davaanym"} src={davaanym} width={150} />
              <Typography textAlign={"center"} fontSize={18} marginTop={2}>Батзориг сангийн тэргүүн</Typography>
              <Typography textAlign={"center"} fontWeight={600} fontSize={18} marginTop={2}>Д.Давааням</Typography>
            </Box>
            <Box flex={1} display={"flex"} flexDirection={"column"} alignItems={"center"}>
              <Image alt={"elbegzaya"} src={elbegzaya} width={150} />
              <Typography textAlign={"center"} fontSize={18} marginTop={2}>Гамма агентлагийн уран бүтээлч</Typography>
              <Typography textAlign={"center"} fontWeight={600} fontSize={18} marginTop={2}>Л.Элбэгзаяа</Typography>
            </Box>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};
