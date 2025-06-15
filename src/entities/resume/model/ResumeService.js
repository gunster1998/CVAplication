export const resumeService = {
    updateField(resume, fieldName, value) {
        return { ...resume, [fieldName]: value };
    },
    updateImage(resume, fileImg) {
        return {
            ...resume,
            img: typeof fileImg !== 'string' ? URL.createObjectURL(fileImg) : fileImg,
        };
    },
    updateFieldExperience(resume, experienceId, fieldName, value) {
        return {
            ...resume,
            Experience: resume.Experience.map((element) => element.id === experienceId
                ? { ...element, [fieldName]: value }
                : element),
        };
    },
    deleteExperience(resume, experienceId) {
        return {
            ...resume,
            Experience: resume.Experience.filter((experience) => {
                return experience.id !== experienceId;
            }),
        };
    },
    addExperience(resume) {
        return {
            ...resume,
            Experience: [
                ...resume.Experience,
                {
                    id: crypto.randomUUID(),
                    Company: '',
                    Role: '',
                    StartDate: '',
                    EndDate: '',
                    Description: '',
                },
            ],
        };
    },
    createEmptyResume() {
        return {
            img: undefined,
            FirstName: 'Константин',
            LastName: 'Дрягин',
            Profession: 'FronteEnd разработчик',
            City: 'Москва',
            Country: 'Россия',
            PostalCode: '612960',
            Phone: '+79991001741',
            Email: 'gunster98@gmail.com',
            Experience: [],
        };
    },
};
