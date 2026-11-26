import Comment from "./Comment";
import CommentsList from "./CommentsList";

const commentsData = [
  {
    name: "Karan Patel",
    text: "Lorem Ipsum dol e sit",
    replies: [
      {
        name: "Raj Sharma",
        text: "Lorem Ipsum dol e sit",
        replies: [
          {
            name: "Abhay Verma",
            text: "Lorem Ipsum dol e sit",
            replies: [
              {
                name: "Sharukh Khan",
                text: "Lorem Ipsum dol e sit",
                replies: [
                  {
                    name: "Akshay Kumar",
                    text: "Lorem Ipsum dol e sit",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Henil Parikh",
    text: "Lorem Ipsum dol e sit",
    replies: [
      {
        name: "Priyanka Patel",
        text: "Lorem Ipsum dol e sit",
      },
    ],
  },
  {
    name: "Sharvil Patel",
    text: "Lorem Ipsum dol e sit",
    replies: [
      {
        name: "Purvi Prajapati",
        text: "Lorem Ipsum dol e sit",
      },
    ],
  },
  {
    name: "Dhaneshwar Koshti",
    text: "Lorem Ipsum dol e sit",
    replies: [
      {
        name: "John Doe",
        text: "Lorem Ipsum dol e sit",
      },
    ],
  },
  {
    name: "Karan Patel",
    text: "Lorem Ipsum dol e sit",
    replies: [
      {
        name: "Dev Shah",
        text: "Lorem Ipsum dol e sit",
      },
    ],
  },
];

const CommentsContainer = () => {
  return (
    <div className="mx-auto w-full max-w-6xl p-4 pb-20 sm:px-6">
      <h1 className="mb-5 border-b border-slate-200 pb-4 text-2xl font-bold tracking-tight text-slate-900">
        Comments
      </h1>

      <div className="space-y-3">
        <CommentsList comments={commentsData} />
      </div>
    </div>
  );
};

export default CommentsContainer;
