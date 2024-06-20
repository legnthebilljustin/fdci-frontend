import { client } from "@/hooks/useClient"
import { useEffect, useState } from "react"

type ContactType = {
    id: string
    name: string
    email: string | null
    company: string | null
    phone: string | null
}

export default function Dashboard() {
    const [contacts, setContacts] = useState([])
    const [next, setNext] = useState(null)
    const [prev, setPrev] = useState(null)

    useEffect(() => {
        const fetchContacts = async() => {
            try {
                const response = await client.get('/userContacts')
                setContacts(response.data?.paginated?.data)
                setNext(response.data?.paginated?.next_page_url)
                setPrev(response.data?.paginated?.last_page_url)
            } catch (err) {
                console.log(err)
            }
        }

        fetchContacts()
    }, [])

    const handleEdit = (contact: ContactType) => {

    }

    const handleDelete = (contactId: string) => {

    }
    
    return (
        <div className="contacts-container">
            <table>
                <thead>
                    <th>Name</th>
                    <th>Company</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>&nbsp;</th>
                </thead>
                <tbody>
                    { contacts && (
                        contacts.map((contact: ContactType, index) => (
                            <tr key={index}>
                                <td>{ contact.name }</td>
                                <td>{ contact.company }</td>
                                <td>{ contact.phone }</td>
                                <td>{ contact.email }</td>
                                <td>
                                    <span onClick={() => handleEdit(contact)}>Edit</span> | <span onClick={() => handleDelete(contact.id)}>Delete</span>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    )
}