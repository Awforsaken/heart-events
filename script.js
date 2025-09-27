// State management
let selectedOriginTags = [];
let selectedDestinationTags = [];

// Initialize the interface
function initializeSelects() {
    const originSelect = document.getElementById('originTagSelect');
    const destinationSelect = document.getElementById('destinationTagSelect');
    
    // Populate both selects with available tags
    availableTags.forEach(tag => {
        const originOption = document.createElement('option');
        originOption.value = tag;
        originOption.textContent = tag;
        originSelect.appendChild(originOption);
        
        const destOption = document.createElement('option');
        destOption.value = tag;
        destOption.textContent = tag;
        destinationSelect.appendChild(destOption);
    });
    
    // Add event listeners
    originSelect.addEventListener('change', () => addTag('origin'));
    destinationSelect.addEventListener('change', () => addTag('destination'));
    
    updateGenerateButton();
}

function addTag(type) {
    const selectId = type + 'TagSelect';
    const selectedValue = document.getElementById(selectId).value;
    
    if (!selectedValue) return;
    
    const targetArray = type === 'origin' ? selectedOriginTags : selectedDestinationTags;
    const maxTags = 2;
    
    // Check if tag is already selected
    if (targetArray.includes(selectedValue)) {
        alert('Tag already selected!');
        document.getElementById(selectId).value = '';
        return;
    }
    
    // Check max tags limit
    if (targetArray.length >= maxTags) {
        alert(`Maximum ${maxTags} tags allowed per side!`);
        document.getElementById(selectId).value = '';
        return;
    }
    
    // Add tag
    targetArray.push(selectedValue);
    document.getElementById(selectId).value = '';
    
    updateTagDisplay(type);
    updateGenerateButton();
}

function removeTag(type, tagToRemove) {
    const targetArray = type === 'origin' ? selectedOriginTags : selectedDestinationTags;
    const index = targetArray.indexOf(tagToRemove);
    
    if (index > -1) {
        targetArray.splice(index, 1);
        updateTagDisplay(type);
        updateGenerateButton();
    }
}

function updateTagDisplay(type) {
    const containerId = type + 'SelectedTags';
    const container = document.getElementById(containerId);
    const tags = type === 'origin' ? selectedOriginTags : selectedDestinationTags;
    
    container.innerHTML = '';
    
    if (tags.length === 0) {
        container.innerHTML = '<em style="color: #999;">No tags selected</em>';
        return;
    }
    
    tags.forEach(tag => {
        const tagSpan = document.createElement('span');
        tagSpan.className = 'tag removable';
        tagSpan.textContent = tag;
        tagSpan.onclick = () => removeTag(type, tag);
        container.appendChild(tagSpan);
    });
}

function updateGenerateButton() {
    const btn = document.getElementById('generateBtn');
    const hasOrigin = selectedOriginTags.length > 0;
    const hasDestination = selectedDestinationTags.length > 0;
    
    btn.disabled = !(hasOrigin && hasDestination);
}

function generateTransition() {
    if (selectedOriginTags.length === 0 || selectedDestinationTags.length === 0) {
        alert('Please select at least one tag for both origin and destination.');
        return;
    }
    
    // Get all relevant tags
    const allTags = [...new Set([...selectedOriginTags, ...selectedDestinationTags])];
    
    // Filter events that match any of the tags
    let relevantEvents = transitionEvents.filter(event => 
        event.tags.some(tag => allTags.includes(tag))
    );
    
    // If we have too many events, randomly select 3-6
    if (relevantEvents.length > 6) {
        relevantEvents = shuffleArray(relevantEvents).slice(0, Math.floor(Math.random() * 4) + 3);
    }
    
    // Sort events to create a narrative flow
    relevantEvents = sortEventsByRelevance(relevantEvents, selectedOriginTags, selectedDestinationTags);
    
    displayTransition(selectedOriginTags, selectedDestinationTags, relevantEvents);
}

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function sortEventsByRelevance(events, originTags, destTags) {
    return events.sort((a, b) => {
        const aOriginMatch = a.tags.filter(tag => originTags.includes(tag)).length;
        const bOriginMatch = b.tags.filter(tag => originTags.includes(tag)).length;
        const aDestMatch = a.tags.filter(tag => destTags.includes(tag)).length;
        const bDestMatch = b.tags.filter(tag => destTags.includes(tag)).length;
        
        // Calculate transition score (origin events first, then mixed, then destination)
        const aTransitionScore = (aOriginMatch * 2) - aDestMatch;
        const bTransitionScore = (bOriginMatch * 2) - bDestMatch;
        
        // Sort by transition score (higher origin match first)
        if (aTransitionScore !== bTransitionScore) {
            return bTransitionScore - aTransitionScore;
        }
        
        // If transition scores are equal, prioritize events with more total matches
        const aTotalMatch = aOriginMatch + aDestMatch;
        const bTotalMatch = bOriginMatch + bDestMatch;
        
        return bTotalMatch - aTotalMatch;
    });
}

function displayTransition(originTags, destinationTags, events) {
    const transitionDiv = document.getElementById('transitionEvents');
    const progressText = document.getElementById('progressText');
    const eventsContainer = document.getElementById('eventsContainer');
    
    const originText = originTags.join(', ');
    const destText = destinationTags.join(', ');
    progressText.textContent = `Delving from [${originText}] to [${destText}]...`;
    
    eventsContainer.innerHTML = '';
    
    if (events.length === 0) {
        eventsContainer.innerHTML = '<div class="no-events">No matching events found for these tag combinations. Try different tags or add more events to the database.</div>';
    } else {
        events.forEach((event, index) => {
            const eventDiv = document.createElement('div');
            eventDiv.className = 'event';
            
            eventDiv.innerHTML = `
                <div class="event-title">${event.title}</div>
                <div class="event-description">${event.description}</div>
                <div class="event-tags">
                    ${event.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            `;
            
            eventsContainer.appendChild(eventDiv);
        });
    }
    
    transitionDiv.style.display = 'block';
    transitionDiv.scrollIntoView({ behavior: 'smooth' });
}

// Utility functions for future expansion
function getRandomEvents(events, count) {
    const shuffled = shuffleArray(events);
    return shuffled.slice(0, count);
}

function filterEventsByTags(events, tags) {
    return events.filter(event => 
        event.tags.some(tag => tags.includes(tag))
    );
}

function getEventsByLength(events, length) {
    return events.filter(event => event.length === length);
}

// Export functions for potential module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initializeSelects,
        addTag,
        removeTag,
        generateTransition,
        shuffleArray,
        sortEventsByRelevance
    };
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', initializeSelects);
        