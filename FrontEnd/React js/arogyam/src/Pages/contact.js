import './contact.css'

const Contact =()=>{
    return (
        <> 
        <div class="container w-50 mt-4 mb-4">
        <h2 className='text-center mb-2 fw-700'> Contact Us</h2>
  <form>

    <label for="fname">First Name</label>
    <input className='ainput' type="text" id="fname" name="firstname" placeholder="Your name.."/>

    <label for="lname">Last Name</label>
    <input className='ainput' type="text" id="lname" name="lastname" placeholder="Your last name.."/>

    <label for="country">Country</label>
    <select id="country" name="country">
    <option value="India">India</option>
      <option value="australia">Australia</option>
      <option value="canada">Canada</option>
      <option value="usa">USA</option>
    </select>

    <label for="subject">Subject</label>
    <textarea id="subject" name="subject" placeholder="Write something.."></textarea>

    <input className='ainput' type="submit" value="Submit"/>

  </form>
</div>
        </>
    )
}
export default Contact;