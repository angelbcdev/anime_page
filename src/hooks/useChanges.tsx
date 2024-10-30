import { useNavigate } from "react-router-dom";

const useChanges = () => {

  const navigate = useNavigate()

  const goTo = (data: any) => {
    navigate('/anime/:' + data.title, { state: data })
    window.scroll({ top: 0 })
  }

  return {
    goTo
  }
};

export default useChanges; 