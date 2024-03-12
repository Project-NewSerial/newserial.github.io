import {
  Container,
  Tab,
  TabLine,
  TabUnderline,
  Underline,
} from "./styles";

interface UserInfo {
  email: string;
  currentPet: string;
  quizCount: number;
  bookmarkCount: number;
}

interface Props {
  userInfo: UserInfo;
  selectedTab: number;
  setSelectedTab: React.Dispatch<React.SetStateAction<number>>;
}

/**
 * Mypage의 Tabs
 * @author 신정은
 */
const Tabs = ({ userInfo, selectedTab, setSelectedTab }: Props) => {
  const tabs = [
    { title: "우유 돌보기", value: userInfo?.currentPet },
    { title: "퀴즈 기록", value: userInfo?.quizCount },
    { title: "북마크한 기사", value: userInfo?.bookmarkCount },
  ];

  return (
    <Container>
      {tabs.map((el, index) => (
        <>
          <Tab
            selected={selectedTab === index}
            onClick={() => setSelectedTab(index)}
          >
            <div className="tab__text">{el.title}</div>
            <div className="tab__text">{el.value}</div>
            {selectedTab === index && <TabUnderline />}
          </Tab>
          {index !== 2 && <TabLine />}
        </>
      ))}
      <Underline />
    </Container>
  );
};

export default Tabs;
