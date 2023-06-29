import { Box, Stack, Typography } from "@mui/material"
import BusinessIcon from '@mui/icons-material/Business';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { useRouter } from "next/router";

export const Footer = () => {
    const router = useRouter();
    const pushHome = () => {
        router.push("/");
    };
    const pushGallery = () => {
        router.push("/gallery");
    };

    return (
        <Box display={"flex"} flexDirection={"row"} boxShadow={2} width={"100%"}>
            <Stack spacing={2} direction={"row"}>
                <Stack spacing={1}>
                    <Typography fontWeight={600} fontSize={18} >Холбоо барих</Typography>
                    <Stack display={"flex"} direction={"row"} spacing={1}>
                        <BusinessIcon fontSize="small" />
                        <Typography fontSize={14} >Монгол улс Улаанбаатар 46 Бага тойруу- 21 Нэгдсэн үндэсний гудамж 1-1 21-6 тоот</Typography>
                    </Stack>
                    <Stack display={"flex"} direction={"row"} spacing={1}>
                        <LocalPhoneIcon fontSize="small" />
                        <Typography fontSize={14} >Дугаар: 91903937, 99184934</Typography>
                    </Stack>
                    <Stack display={"flex"} direction={"row"} spacing={1}>
                        <AlternateEmailIcon fontSize="small" />
                        <Typography fontSize={14} >Цахим хаяг: info@gammaphoto.mn</Typography>
                    </Stack>
                </Stack>
                <Stack spacing={1}>
                    <Typography fontWeight={600} fontSize={18} >Цэс</Typography>
                    <Typography onClick={pushHome} fontSize={14} >Нүүр</Typography>
                    <Typography fontSize={14} onClick={pushGallery} >Галерей</Typography>
                </Stack>
                <Stack spacing={1}>
                    <Typography fontWeight={600} fontSize={18} >Холбоо барих</Typography>
                    <Box display={"flex"} flexDirection={"row"}>
                        <BusinessIcon />
                        <Typography fontSize={14} >Монгол улс Улаанбаатар 46 Бага тойруу- 21 Нэгдсэн үндэсний гудамж 1-1 21-6 тоот</Typography>
                    </Box>
                    <Typography fontSize={14} >М</Typography>
                </Stack>
            </Stack>
        </Box>
    )
}