import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layout"
const IndexPage = (props) => {
 const covid19DataSet = props.data.allMongodbCovid19Covid19.edges;
return (
 <Layout>
 <table>
 <tr>
 <td>Type</td>
 <td>Location</td>
 <td>Hospital</td>
 <td>Available Bed</td>
 <td>Links</td>
 <td>Contact Number</td>
 <td>Date of Update</td>
 <td>Comments</td>
 </tr>
 {covid19DataSet.map(covid19Data =>
 <tr>
 <td>{covid19Data.node.type}</td>
 <td>{covid19Data.node.location}</td>
 <td>{covid19Data.node.hospital}</td>
 <td>{covid19Data.node.available_bed}</td>
 <td>{covid19Data.node.links}</td>
 <td>{covid19Data.node.number}</td>
 <td>{covid19Data.node.date}</td>
 <td>{covid19Data.node.commentes}</td>
</tr>
 )}
 </table>
 </Layout>
)
}
export default IndexPage
export const pageQuery = graphql`
query MQuery {
 allMongodbCovid19Covid19 {
 edges {
 node {
 hospital
 date
 commentes
 available_bed
 links
 location
 number
 type
 }
 }
 }
}
