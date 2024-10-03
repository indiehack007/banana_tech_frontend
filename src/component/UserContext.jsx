import { createContext, useState } from "react";

export const UserContext = createContext();

// UserProvider component that will wrap around the application
// eslint-disable-next-line react/prop-types
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [profile, setprofile] = useState();
  const [data, setData] = useState();
  const [selectedOption, setSelectedOption] = useState("Select a website");
  const [websites, setWebsites] = useState([]); 
  const [selectedWebsite, setSelectedWebsite] = useState(); // Variable to keep track of the selected website
  const [selectedTemplate, setSelectedTemplate] = useState(); // Variable to keep track of the selected website

  return (
    <UserContext.Provider
      value={{
        profile,
        setprofile,
        user,
        selectedTemplate,
        setSelectedTemplate,
        setUser,
        selectedOption,
        setSelectedOption,
        websites,
        setWebsites,
        selectedWebsite,
        setSelectedWebsite,
        data,
        setData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
