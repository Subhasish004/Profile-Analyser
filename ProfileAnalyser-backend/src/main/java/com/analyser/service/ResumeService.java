package com.analyser.service;


import com.analyser.model.ResumeInfo;
import com.analyser.repository.ResumeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ResumeService {

    @Autowired
    private ResumeRepository resumeRepository;

    public ResumeInfo saveResume(ResumeInfo info) {
        return resumeRepository.save(info);
    }
}
