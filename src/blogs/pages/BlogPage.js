import React from "react";
import Blogs from "../components/Blogs";
import "./BlogPage.css";
const DUMMY_DATA = [
  {
    id: 1,
    image: "../../images/blog1.jpg",
    header: `Hon. Raila's journey to Au chairmanship`,
    paragraph: `Hon. Raila's journey to Au chairmanship continue to To hit high chances this. Comes after The AU executive Council dropped the gender rule making it easier for East African to submit Hon. Raila's name.
      Today  
      Musalia Mudavadi
      Foreign Affairs Cabinet Secretary Musalia Mudavadi during His interview joined other leaders who believe in Raila's bid to become the AU chairman
       African Union (AU) Executive Council, Raila Odinga, has garnered effusive praise from Prime Cabinet Secretary and Foreign Affairs CS, Musalia Mudavadi.
      
      Following a historic vote in Addis Ababa on Friday, March 15, Mudavadi expressed unwavering support for Raila’s bid to lead the continent.
      
      “We believe there's a strong synergy, and we are offering Africa a very credible candidate,” said the Foreign Affairs CS.
      
      
      Mudavadi, in an interview, hailed Raila's extensive experience in public office, citing his tenure as the Prime Minister of the Republic of Kenya.
      
      He emphasized Raila's strong Pan-African credentials and his proven ability to foster unity even in the face of adversity.
      
      Mudavadi underscored Raila's potential to address pressing issues facing Africa, such as conflict resolution, food insecurity, and economic integration.
      
      He said, “Raila has seen both hot and cold, if I may use such terminology. And he has shown the capacity to bring people together and to reconcile even under difficult circumstances.” 
      
      Adding, “ And looking at the kind of challenges we are facing on the African continent, issues around conflict, food insecurity, the need to foster greater integration and enhance economic activity along the African continent.” 
      
      The endorsement comes as Kenya prepares to launch a continental campaign following the AU Executive Council's decision to drop two key proposals that could have hindered Raila's candidacy.
      
      Mudavadi revealed that the Council no longer insists on the next AU Commission Chairperson being a woman, nor does it mandate a specific region for the chairperson, providing greater flexibility for Kenya's bid.
      
      "This is a major breakthrough for the Eastern Africa region," remarked Mudavadi, as he highlighted the Council's unanimous affirmation of the region's right to nominate the next AU Commission Chairperson. 
      
      
      However, the decision awaits approval by the Assembly, comprising the heads of state and government of the 55-member bloc, before becoming official regulation.
      
      Reacting to the development, Mudavadi asserted that Raila Odinga is now poised to enter the race for the AU Commission Chairperson. 
      
      He emphasised that there are no longer any technical or legal obstacles hindering Kenya from submitting its candidate, signalling a clear path forward for Raila.
      
      Under the revised rules, only the Northern Africa region will nominate candidates for the Deputy Chairperson position, while the other regions will compete for the six positions of commissioners. 
      
      Mudavadi outlined the upcoming steps in Raila's journey, which include formal submission of paperwork, regional lobbying efforts, and presenting Raila's credentials to the African continent.
      
      Moreover, Mudavadi highlighted Kenya's broader engagement in African affairs, citing President William Ruto's active involvement in issues like climate change, financial reform, and enhancing Africa's global influence. 
      
      He noted Ruto's nomination by African heads of state to spearhead further reforms within the AU, indicating Kenya's commitment to advancing the continent's interests.`,
  },
];
function BlogPage() {
  return (
    <div className="blog-main_page">
      <Blogs data={DUMMY_DATA} />
    </div>
  );
}

export default BlogPage;
