import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import api from "../../../../api";
import { List, ListLeft, ListRight, NoData } from "./styles";

interface RootState {
  auth: {
    accessToken: null | string;
  };
}

interface BookmarkList {
  title: string;
  createdTime: string;
}

const BookmarkList = () => {
  const accessToken = useSelector((state: RootState) => state.auth.accessToken);

  //북마크 기사 목록
  const getBookmarkList = async () => {
    const { data } = await api.get(`/mypage/bookmark`, {
      headers: {
        Authorization: `${accessToken}`,
      },
    });

    return data;
  };

  const { data: bookmarkData } = useQuery({
    queryKey: ["bookmark", accessToken],
    queryFn: getBookmarkList,
  });

  if (bookmarkData?.length !== 0) {
    return (
      <>
        {bookmarkData?.map((el: BookmarkList, index: number) => (
          <List border={bookmarkData.length === index + 1}>
            <ListLeft>
              <img src="/assets/icons/icon_bookmark_Y.svg" />
              <div className="list-left__bookmark">{el.title}</div>
            </ListLeft>
            <ListRight>{el.createdTime}</ListRight>
          </List>
        ))}
      </>
    );
  } else {
    return <NoData>북마크한 기사가 없습니다.</NoData>;
  }
};

export default BookmarkList;
