import React from 'react'
import { useState } from 'react';

const DataEntrySection = ({dataCompletition, handleDataCompletition}) => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        address: '',
        profilePic: File || null,
        bio: '',
        skills: [],
        interests: [],  
        projects: [],
        socials: []
    });


    const addSkill = (event) => {
        event.preventDefault();
        setFormData({...formData, skills:[...formData.skills, {title: '', detail: ''}]})
        console.log(formData)
    }

    const addInterest = (event) => {
        event.preventDefault();
        setFormData({...formData, interests:[...formData.interests, {title: '', detail: ''}]})
    }

    const addProject = (event) => {
        event.preventDefault();
        setFormData({...formData, projects:[...formData.projects, {title: '', detail: '', github: ''}]})
    }
    
    const addSocial = (event) => {
        event.preventDefault();
        setFormData({...formData, socials:[...formData.socials, {name: '', url: ''}]})
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value)
        setFormData({
            ...formData,
            [name]: value
        });
        
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        console.log("ForFiles", name, files[0])
        setFormData({
            ...formData,
            [name]: files[0]
        });
    }

    const handleSkillChange = (e, index) => {
        const { name, value } = e.target;
        const skills = [...formData.skills];
        skills[index] = { ...skills[index], [name]: value };
        setFormData({ ...formData, skills });
    }

    const handleInterestChange = (e, index) => {
        const { name, value } = e.target;
        const interests = [...formData.interests];
        interests[index] = { ...interests[index], [name]: value };
        setFormData({ ...formData, interests });
        console.log(formData)
    }

    const handleProjectChange = (e, index) => {
        const { name, value } = e.target;
        const projects = [...formData.projects];
        projects[index] = { ...projects[index], [name]: value };
        setFormData({ ...formData, projects });
        console.log(formData)
    }

    const handleSocialChange = (e, index) => {
        const { name, value } = e.target;
        const socials = [...formData.socials];
        socials[index] = { ...socials[index], [name]: value };
        setFormData({ ...formData, socials });
       
    }

    const dataEntry = (event) => {
        event.preventDefault();
        handleDataCompletition(true, formData)
    }

  return (
    <div className="data-entry-section">
        <div className='data-card-heading'>
            <p>Enter Data</p>
        </div>
        <div className='data-card-body'>
            <form>
                <div className="data-card-body-personal-info">
                    <p className='title'>Personal Information</p>
                    <div className='data-inputs'>
                        <label name='full-name'>Full Name<input required type="text" id='full-name' name='fullName' value={formData.fullName} onChange={handleChange}/></label>
                        <label name='email'>Email<input required type="email" id='email' name='email' value={formData.email} onChange={handleChange}/></label>
                        <label name='address'>Address<input required type="text" id='address' name='address' value={formData.address} onChange={handleChange}/></label>
                        <div className='pic-box'>
                            <label name='profile-pic'>Upload Profile Picture<input required type="file" id='profile-pic' name='profilePic' onChange={handleFileChange}/></label>
                        </div>
                    </div>
                </div>
                <div className="data-card-body-biography">
                    <p className='title'>Biography</p>
                    <div className='data-inputs'>
                        <label name='bio'>Please Introduce Youself<textarea required type="text" id='bio' placeholder='Describe yourself in 2-3 lines' name='bio' value={formData.bio} onChange={handleChange}/></label>
                    </div>
                </div>
                <div className="data-card-body-skills-and-interests">
                    <p className='title'>Add Skills</p>
                    <div className="skills-input">
                        
                        {formData.skills.map((skill, index) => (
                            <div className='skill' key = {index}>
                                <label name='skill-title'><span>Skill Title</span><input required placeholder="Enter Skill Name" type="text" id='skill-title' name='title' value={skill.title} onChange={(e) =>{handleSkillChange(e, index)}}/></label>
                                <label name='skill-detail'><span>Description</span><textarea required placeholder='Describe this Skill' type="text" id='skill-detail' name='detail' value={skill.detail} onChange={(e) =>{handleSkillChange(e, index)}}/></label>
                            </div>
                          ))
                        }

                        <div className="skills-add">
                            <p>Add Skill</p>
                            <button id='add-skill' onClick={addSkill}>+</button>
                        </div>
                        
                    </div>
                    <div className="interests-input">
                        <p className='title'>Add Interest</p>
                        {formData.interests.map((interest, index) => (
                            <div className='interest' key = {index}>
                                <label name='interest-title'><span>Interest Title</span><input required name='title' placeholder='Enter Interest Name' type="text" id='interest-title' value={interest.title} onChange={(e)=>{handleInterestChange(e, index)}}/></label>
                                <label name='interest-detail'><span>Description</span><textarea required name='detail' placeholder='Describe this Interest' type="text" id='interest-detail' value={interest.detail} onChange={(e)=>{handleInterestChange(e, index)}}/></label>
                            </div>
                        ))}
                        <div className="interests-add">
                            <p>Add Interest</p>
                            <button id='add-interest' onClick={addInterest}>+</button>
                        </div>
                    </div>
                    
                </div>
                <div className="data-card-body-projects">
                    <p className='title'>Projects</p>
                    <div className="projects-input">
                        
                        {formData.projects.map((project, index) => (
                            <div className='project' key={index}>
                                <label name='project-title'><span>Project Title</span><input required name='title' value={project.title} onChange={(e)=>handleProjectChange(e,index)} type="text" id='project-title'/></label>
                                <label name='project-detail'><span>Description</span><textarea required type="text" name='detail' value={project.detail} onChange={(e)=>handleProjectChange(e,index)} id='project-detail'/></label>
                                <label name='projaect-github'><span>Github Link</span><input required type="text" name='github' value={project.githb} onChange={(e)=>handleProjectChange(e,index)} id='project-github'/></label>
                                <div className='pic-box'>
                                    <label name='project-pic'><span>Image</span><input required type="file" id='project-pic' value={project.image} name='image' onChange={(e)=>{handleProjectChange(e,index)}}/></label>
                                </div>
                            </div>
                        ))}

                        <div className="projects-add">
                            <p>Add Project</p>
                            <button id='add-project' onClick={addProject}>+</button>
                        </div>
                    </div>
                </div>
                <div className="data-card-body-social">
                    <p className='title'>Social Media</p>
                    <div className="social-input">
                        {formData.socials.map((social, index) => (
                            <div className='social' key={index}>
                                <label name='social-name'><span>Name</span><input required name='name' value={social.name} onChange={(e)=>{handleSocialChange(e, index)}} type="text" id='social-name'/></label>
                                <label name='social-url'><span>URL</span><input required    name='url' value={social.url} onChange={(e)=>{handleSocialChange(e, index)}} type="text" id='social-url'/></label>
                            </div>
                        ))}
                        <div className='social-add'>
                            <p>Add Social Media</p>
                            <button id='add-social' onClick={addSocial}>+</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        <div className="data-card-footer">
            <button type='submit' onClick={dataEntry}>Submit</button>
        </div>
    </div>
  )
}

export default DataEntrySection
