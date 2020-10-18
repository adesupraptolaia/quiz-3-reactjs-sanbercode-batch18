import React from "react";
import ListEditContent from "./ListEditContent";
import FormEditContent from "./FormEditContent";

const EditContent = () => {
    const isAdmin = localStorage.getItem("isAdmin")
    if (isAdmin !== "true") {
        window.location.replace("/")
    } else {
        return (
            <div className="editcontent" style={{marginTop: "60px", marginBottom: "10px"}}>
                <ListEditContent />
    
                <FormEditContent />
            </div>
        );
    }
};

export default EditContent;
