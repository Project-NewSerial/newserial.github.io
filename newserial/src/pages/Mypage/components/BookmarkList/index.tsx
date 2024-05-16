import React, { useState } from "react";
import Pagination from "../../../../components/Pagination";
import LoadingImage from "../../../../components/LoadingImage";
import {
  Container,
  Content,
  Lists,
  List,
  ListLeft,
  ListRight,
  NoData,
} from "./styles";
import useCommon from "../../../../hooks/queries/useCommon";

interface BookmarkList {
  title: string;
  createdTime: string;
}

const BookmarkList = () => {
  const [page, setPage] = useState(0);

  //북마크 리스트 데이터 가져오기
  const { isLoading, data } = useCommon(`/mypage/bookmark?page=${page}`);

  if (isLoading)
    return (
      <Content>
        <LoadingImage width={50} />
      </Content>
    );

  const { myBookmarkDtoList, totalBookmarkCount } = data;

  return (
    <Container>
      {totalBookmarkCount !== 0 ? (
        <Content>
          <Lists>
            {myBookmarkDtoList.map((el: BookmarkList, index: number) => (
              <List border={myBookmarkDtoList.length === index + 1}>
                <ListLeft>
                  <img src="/assets/icons/icon_bookmark_Y.svg" />
                  <div className="list-left__bookmark">{el.title}</div>
                </ListLeft>
                <ListRight>{el.createdTime}</ListRight>
              </List>
            ))}
          </Lists>
          <Pagination
            count={Math.floor(totalBookmarkCount / 10) + 1}
            page={page}
            setPage={setPage}
          />
        </Content>
      ) : (
        <NoData>북마크한 기사가 없습니다.</NoData>
      )}
    </Container>
  );
};

export default BookmarkList;
