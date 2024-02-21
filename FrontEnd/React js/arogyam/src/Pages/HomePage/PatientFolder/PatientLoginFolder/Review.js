import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Review = () => {
  const navigate = useNavigate();
  const [rating, setRating] = useState("BEST");
  const [pid, setPid] = useState(localStorage.getItem("Pid"));
  const [did, setDid] = useState();
  const [review, setReview] = useState("Write your review");

  useEffect(() => {
    if (localStorage.getItem("Pid") == null) {
      navigate("/PatientLogin");
    }
  }, []);

  function AddReview(event) {
    event.preventDefault(); 
    console.log(pid);
    console.log(did)
   // Prevent the default form submission behavior
    console.log("In add review");

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        "rating": rating,
        "review": review,
        "reviewpid": parseInt(pid), // Use the "did" state directly
        "reviewdid": parseInt(did)
      }),
    };

    fetch("http://localhost:8080/review/addreview/"+pid+"/"+did, requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log(data); // Log the response data if needed
        navigate("/PatietAfterLoginLayout");
      })
      .catch(error => {
        console.error("Error adding review:", error);
      });
  }

  return (
    <>
      <div className="container">
  <form onSubmit={AddReview} className="mt-4">
    <div className="mb-3">
      <label htmlFor="review" className="form-label">
        Review:
      </label>
      <input
        type="text"
        id="review"
        className="form-control"
        value={review}
        onChange={e => setReview(e.target.value)}
      />
    </div>
    <div className="mb-3">
      <label htmlFor="pid" className="form-label">
        Patient ID:
      </label>
      <input
        type="number"
        id="pid"
        className="form-control"
        value={pid}
        onChange={e => setPid(e.target.value)}
      />
    </div>
    <div className="mb-3">
      <label htmlFor="did" className="form-label">
        Doctor ID:
      </label>
      <input
        type="number"
        id="did"
        className="form-control"
        value={did}
        onChange={e => setDid(e.target.value)}
      />
    </div>
    <div className="mb-3">
      <label htmlFor="rating" className="form-label me-2 mt-2">
        Rating:
      </label>
      <select
        id="rating"
        className="form-select"
        onChange={e => setRating(e.target.value)}
      >
        <option value={"BEST"}>BEST</option>
        <option value={"BAD"}>BAD</option>
        <option value={"GOOD"}>GOOD</option>
      </select>
    </div>
    <button type="submit" className="btn btn-primary">
      SUBMIT
    </button>
  </form>
</div>

    </>
  );
};

export default Review;
