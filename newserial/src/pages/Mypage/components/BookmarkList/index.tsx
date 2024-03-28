import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import api from "../../../../api";
import Pagination from "../../../../components/Pagination";
import { Container, List, ListLeft, ListRight, Lists, NoData } from "./styles";
interface RootState {
  auth: {
    accessToken: null | string;
  };
}

interface Bookmark {
  totalBookmarkCount: number;
  myBookmarkDtoList: Array<BookmarkList>;
}
interface BookmarkList {
  title: string;
  createdTime: string;
}

const BookmarkList = () => {
  const accessToken = useSelector((state: RootState) => state.auth.accessToken);
  const [page, setPage] = useState(0);

  //북마크 기사 목록
  const getBookmarkList = async () => {
    const { data } = await api.get(`/mypage/bookmark?page=${page}`, {
      headers: {
        Authorization: `${accessToken}`,
      },
    });

    return data;
  };

  const { isLoading, data } = useQuery({
    queryKey: ["bookmark", accessToken],
    queryFn: getBookmarkList,
  });

  if (isLoading) return null;

  const { myBookmarkDtoList, totalBookmarkCount } = data;
  return (
    <Container>
      {totalBookmarkCount !== 0 ? (
        <>
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
            count={totalBookmarkCount}
            page={page}
            setPage={setPage}
          />
        </>
      ) : (
        <NoData>북마크한 기사가 없습니다.</NoData>
      )}
    </Container>
  );
};

export default BookmarkList;
