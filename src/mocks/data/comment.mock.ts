import type { CommentType } from '@type/space.type';
import { successResponse } from '@mocks/data/response.mock';
/**
 * 포스트 게시물 댓글들의 목 데이터
 */
export const commentList: CommentType[] = [
  {
    id: 147394546,
    refId: 147394546,
    writer: {
      id: 'silence35',
      memberKey: 'PNn7Zl1KMMogCpZIkU0v4Q',
      nick: '반달카레집사',
      url: 'https://source.unsplash.com/random/300×300',
    },
    content: '안녕하세요^^',
    createDate: String(new Date()),
    updateDate: String(new Date()),
    isRef: false,
    isMyComment: false,
  },
  {
    id: 148263681,
    refId: 147394546,
    writer: {
      id: 'jihyeong00',
      memberKey: '3D6rpqP63f3E7gxXN1PHrg',
      nick: '칸탐로봇',
      url: 'https://source.unsplash.com/random/300×300',
    },
    content: '@반달카레집사@님 잘부탁드립니다! @짱구@님도 잘부탁드립니다.',
    createDate: String(new Date()),
    updateDate: String(new Date()),
    isRef: true,
    isMyComment: true,
  },
  {
    id: 148263752,
    refId: 147394546,
    writer: {
      id: 'jihyeong00',
      memberKey: '3D6rpqP63f3E7gxXN1PHrg',
      nick: '칸탐로봇',
      url: 'https://source.unsplash.com/random/300×300',
    },
    replyMember: {
      id: 'jihyeong00',
      memberKey: '3D6rpqP63f3E7gxXN1PHrg',
      nick: '칸탐로봇',
    },
    content: '잘부탁드립니다!',
    createDate: String(new Date()),
    updateDate: String(new Date()),
    isRef: true,
    isMyComment: true,
  },
  {
    id: 147395080,
    refId: 147395080,
    writer: {
      id: 'evajun2014',
      memberKey: 'czx8FG78U3r3NLO8pXwKxQ',
      nick: '책장속의 앨리스',
      url: 'https://source.unsplash.com/random/300×300',
    },
    content: '반갑습니다',
    createDate: String(new Date()),
    updateDate: String(new Date()),
    isRef: false,
    isMyComment: false,
  },
  {
    id: 147395776,
    refId: 147395776,
    writer: {
      id: 'bklee2094',
      memberKey: 'db9nJBTWhwWfiyzyZLFCoQ',
      nick: '예진님',
      url: 'https://source.unsplash.com/random/300×300',
    },
    content: '반가워용',
    createDate: String(new Date()),
    updateDate: String(new Date()),
    isRef: false,
    isMyComment: false,
  },
  {
    id: 147395885,
    refId: 147395885,
    writer: {
      id: 'pjh-5409',
      memberKey: 'anbY6fo5AF0rA7myIiAUNA',
      nick: '착한왕자',
      url: 'https://source.unsplash.com/random/300×300',
    },
    content: '저도 오늘 가입했어요~반가워요~',
    createDate: String(new Date()),
    updateDate: String(new Date()),
    isRef: false,
    isMyComment: false,
  },
  {
    id: 148263683,
    refId: 147395885,
    writer: {
      id: 'jihyeong00',
      memberKey: '3D6rpqP63f3E7gxXN1PHrg',
      nick: '칸탐로봇',
      url: 'https://source.unsplash.com/random/300×300',
    },
    content: '잘부탁드립니다!',
    createDate: String(new Date()),
    updateDate: String(new Date()),
    isRef: true,
    isMyComment: true,
  },
  {
    id: 147397235,
    refId: 147397235,
    writer: {
      id: 'nineholic9',
      memberKey: '19Tsid7PBotFzE5Iv5Tyrw',
      nick: 'Lindsay9',
      url: 'https://source.unsplash.com/random/300×300',
    },
    content: '하이요`~~^^',
    createDate: String(new Date()),
    updateDate: String(new Date()),
    isRef: false,
    isMyComment: false,
  },
  {
    id: 147397239,
    refId: 147397239,
    writer: {
      id: 'sy081622',
      memberKey: 'kSLqe3we7GRpldQ983zEiQ',
      nick: '레디오',
      url: 'https://source.unsplash.com/random/300×300',
    },
    content: '안녕하세요!',
    createDate: String(new Date()),
    updateDate: String(new Date()),
    isRef: false,
    isMyComment: false,
  },
  {
    id: 147397983,
    refId: 147397983,
    writer: {
      id: 'lchchch',
      memberKey: 'UUokpyZu8c3YsWde5V6CVQ',
      nick: '용요',
      url: 'https://source.unsplash.com/random/300×300',
    },
    content: '안녕하세요',
    createDate: String(new Date()),
    updateDate: String(new Date()),
    isRef: false,
    isMyComment: false,
  },
  {
    id: 147399346,
    refId: 147399346,
    writer: {
      id: 'iniwang',
      memberKey: 'mGg-2-VN0QDvJE05K1oLfQ',
      nick: '까치랑보들이',
      url: 'https://source.unsplash.com/random/300×300',
    },
    content: '반갑습니다',
    createDate: String(new Date()),
    updateDate: String(new Date()),
    isRef: false,
    isMyComment: false,
  },
  {
    id: 147399996,
    refId: 147399996,
    writer: {
      id: 'haha0729',
      memberKey: 'sB-6BijF_Qr5QpyhKqCM-w',
      nick: 'Ragdoll Luna',
      url: 'https://source.unsplash.com/random/300×300',
    },
    content: '반갑습니다!',
    createDate: String(new Date()),
    updateDate: String(new Date()),
    isRef: false,
    isMyComment: false,
  },
  {
    id: 147401557,
    refId: 147401557,
    writer: {
      id: 'milani5',
      memberKey: 'RJuZrDA83t9T4vn4jN_X-g',
      nick: '눈누 난나라',
      url: 'https://source.unsplash.com/random/300×300',
    },
    content: '반갑습니다',
    createDate: String(new Date()),
    updateDate: String(new Date()),
    isRef: false,
    isMyComment: true,
  },
];

export const postComment = successResponse;

export const deleteComment = successResponse;
