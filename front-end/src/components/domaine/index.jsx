import { useDomaine } from "./../../services/api/domaine/index";
import { useState } from "react";

const domaine = (props) => {
  const [domaine, setDomaine] = useState([]);
  const toast = useToast();
  const { isLoading, refetch } = useDomaine({
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
        setDomaine(res.data);
    },
  });

  return (
    <React.Fragment>
      </React.Fragment>
  );
};
export default domaine;
