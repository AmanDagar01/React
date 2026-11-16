import React from 'react'

function ProfileCard({name, role, experience}) {
  return (
    <div>
        <h1>{name} - {role} - {experience}</h1>
        
    </div>
  )
}

export default ProfileCard



// Challenge 2 — Reusable components
// Create a ProfileCard component that accepts three props:
// - name
// - role
// - experience
// Display each in a separate element.
// Render two cards using the same component:
// - Aman — React Developer — 4 months of React experience.
// - Rahul — Frontend Developer — 1 year of React experience.
// The point is to understand how one component can render different data.