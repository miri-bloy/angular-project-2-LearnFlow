import { articleObj } from "../components/article/article.model";

export const ARTICLES: articleObj[] = [
  // User 1 - In progress
  { id: '101', userId: '1', title: 'Introduction to IT', contex: 'General overview of the technology world...', status: 'read' },
  { id: '102', userId: '1', title: 'Databases 101', contex: 'How to manage data efficiently...', status: 'read' },
  { id: '103', userId: '1', title: 'Cyber Security', contex: 'Principles of protecting sensitive data...', status: 'unread' },

  // User 2 - Completed all (Eligible for course)
  { id: '201', userId: '2', title: 'Programming Basics', contex: 'Basic logic and code writing...', status: 'read' },
  { id: '202', userId: '2', title: 'Data Structures', contex: 'Arrays, lists, and queues...', status: 'read' },
  { id: '203', userId: '2', title: 'Problem Solving', contex: 'Basic algorithms for solving problems...', status: 'read' },

  // User 3 - Not started
  { id: '301', userId: '3', title: 'Computer Hardware', contex: 'Introduction to hardware and software...', status: 'unread' },
  { id: '302', userId: '3', title: 'Operating Systems', contex: 'How modern OS works...', status: 'unread' },
  { id: '303', userId: '3', title: 'Networking', contex: 'Concepts in internet networks...', status: 'unread' },

  // User 4 - Almost finished
  { id: '401', userId: '4', title: 'UI/UX Design', contex: 'Principles of user interface design...', status: 'read' },
  { id: '402', userId: '4', title: 'Frontend Development', contex: 'Working with HTML and CSS...', status: 'read' },
  { id: '403', userId: '4', title: 'Angular Framework', contex: 'Introduction to modern frameworks...', status: 'unread' }
];