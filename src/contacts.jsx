import { Form, useLoaderData } from "react-router-dom";
import { getContact } from "./utils/contacts";

export async function loader({ params }) {
  const contract = await getContact(params.contactId)
  return { contract }
}

export default function Contact() {
  const contact = useLoaderData();
  // console.log(contact.first)
  // const contact = {
  //   first: "Bharat",
  //   last: "Bhusal",
  //   avatar: "https://media.licdn.com/dms/image/C5603AQFadpJ1GlmF4Q/profile-displayphoto-shrink_200_200/0/1635705693557?e=2147483647&v=beta&t=vHgwPrfs7al5w8vIsVYksjZdXTSlEBLAhAr9kkpZMhw",
  //   twitter: "bharatbhusal02",
  //   notes: "You are never done learning!",
  //   favorite: true,
  // };

  return (
    <div id="contact">
      <div>
        <img
          key={contact.avatar}
          src={contact.avatar}
        />
      </div>

      <div>
        <h1>
          {contact.first || contact.last ? (
            <>
              {contact.first} {contact.last}
            </>
          ) : (
            <i>No Name</i>
          )}{" "}
          <Favorite contact={contact} />
        </h1>

        {contact.twitter && (
          <p>
            <a
              target="_blank"
              href={`https://twitter.com/${contact.twitter}`}
            >
              {contact.twitter}
            </a>
          </p>
        )}

        {contact.notes && <p>{contact.notes}</p>}

        <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
          <Form
            method="post"
            action="destroy"
            onSubmit={(event) => {
              if (
                !confirm(
                  "Please confirm you want to delete this record."
                )
              )
              {
                event.preventDefault();
              }
            }}
          >
            <button type="submit">Delete</button>
          </Form>
        </div>
      </div>
    </div>
  );
}

function Favorite({ contact }) {
  // yes, this is a `let` for later
  let favorite = contact.favorite;
  return (
    <Form method="post">
      <button
        name="favorite"
        value={favorite ? "false" : "true"}
        aria-label={
          favorite
            ? "Remove from favorites"
            : "Add to favorites"
        }
      >
        {favorite ? "★" : "☆"}
      </button>
    </Form>
  );
}
