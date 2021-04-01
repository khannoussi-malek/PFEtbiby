import { useMedecinInfo } from "./../../services/api/Medecin information/index";
import { useToast } from "@chakra-ui/react";
const InformationsSurLeMedecin = (props) => {
  const { medecin } = props;
  console.log(medecin);
  const params = { id: medecin };
  const toast = useToast();

  const { isLoading, refetch } = useMedecinInfo({
    params,
    onError: (error) => {
      toast({
        title: "🌐 Problème de connexion",
        description: " Il y a un problème de connexion",
        status: "success",
        duration: `4000`,
        isClosable: true,
      });
    },
    onSuccess: (res) => {
      console.log(res);
    },
  });

  return null;
};
export default InformationsSurLeMedecin;
