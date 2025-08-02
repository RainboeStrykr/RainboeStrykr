const apiUrl = "https://opbento.edgexhq.tech/api/bento?n=Abhiraj&g=rainboestrykr&x=rainboestrykr&l=abhiraj-bhowmick&i=&p=https%3A%2F%2Fabhiraj.co&z=9c46f";
interface BentoResponse {
  url: string;
}

const fetchBentoUrl = async (apiUrl: string): Promise<string> => {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: BentoResponse = (await response.json()) as BentoResponse;
    return data.url;
  } catch (error) {
    console.error("Error fetching Bento URL:", error);
    throw error;
  }
};

// @ts-ignore
fetchBentoUrl(apiUrl);
