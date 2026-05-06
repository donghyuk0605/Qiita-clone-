export interface Article {
  id: string;
  title: string;
  author: {
    name: string;
    username: string;
    iconUrl: string;
  };
  tags: string[];
  lgtmCount: number;
  createdAt: string;
}

export const mockArticles: Article[] = [
  {
    id: '1',
    title: '個人開発の運用コストを本当に0円にした技術選定と設計判断のすべて',
    author: {
      name: '哲平 須山',
      username: 'teppei19980914',
      iconUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=teppei',
    },
    tags: ['設計', 'GithubPages', '個人開発', '新人プログラマ応援'],
    lgtmCount: 1245,
    createdAt: '2026-05-01T10:00:00Z',
  },
  {
    id: '2',
    title: '【緊急】Cursorに「git clone」するだけでPCが乗っ取られる脆弱性！',
    author: {
      name: 'Babushka Ai',
      username: 'emi_ndk',
      iconUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=emi',
    },
    tags: ['Git', 'Security', '脆弱性', 'AI', 'cursor'],
    lgtmCount: 892,
    createdAt: '2026-05-02T14:30:00Z',
  },
  {
    id: '3',
    title: 'Excel業務を壊さずAPI化する設計入門：現場を敵にしないDXの作り方',
    author: {
      name: '樋口 悟',
      username: 'satoru_higuchi',
      iconUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=satoru',
    },
    tags: ['Excel', 'API', '設計', 'DX'],
    lgtmCount: 630,
    createdAt: '2026-05-03T09:15:00Z',
  },
  {
    id: '4',
    title: 'AIエージェントを会社で使いたい！→「え、セキュリティどうするの？」',
    author: {
      name: 'sharu389no',
      username: 'sharu389no',
      iconUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sharu',
    },
    tags: ['Security', 'MCP', 'AIエージェント', 'ClaudeCode'],
    lgtmCount: 412,
    createdAt: '2026-05-03T18:45:00Z',
  },
  {
    id: '5',
    title: 'Claude Codeについて思うこと',
    author: {
      name: '大澤 文孝',
      username: 'sour23',
      iconUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sour',
    },
    tags: ['書籍', '生成AI', 'ClaudeCode'],
    lgtmCount: 388,
    createdAt: '2026-05-04T07:20:00Z',
  },
];
