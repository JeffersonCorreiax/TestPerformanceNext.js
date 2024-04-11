import Box from "@/components/Box";
import theme from "@/theme/theme";



export default function Home() {
  return (<>

    <Box
      styleSheet={{ fontFamily: theme.typography.fontFamily }}
      tag="main"
    >
      Olá
    </Box>

    <main className=" flex-col ">


      <div>  TITULO </div>

      <div>  MAIN </div>

      <div>  CONTENT </div>

      <div>  CONTENT 2 </div>

      <div>  FOOTER </div>

    </main>

  </>

  );
}
