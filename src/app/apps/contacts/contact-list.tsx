import { handleDeleteContact } from "../messages/messages-facade";
import { useCurrentUser } from "../users/user-model";
import { Contact } from "./contact";
import { ContactCard } from "./contact-card";

interface ContactListProps {
    contacts: Contact[];
}

export function ContactList(props: ContactListProps) {
    const { contacts } = props;

    const currentUser = useCurrentUser()!;

    return (
        <>
            {contacts.map((contact) => (
                <ContactCard
                    key={contact.id}
                    contact={contact}
                    onDeleteContact={(contactId) => handleDeleteContact(contactId, currentUser.uid)}
                />
            ))}
        </>
    );
}
