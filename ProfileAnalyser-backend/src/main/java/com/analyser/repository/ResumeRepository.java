package com.analyser.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.analyser.model.ResumeInfo;

public interface ResumeRepository extends JpaRepository<ResumeInfo, Long> {
    // Basic CRUD is auto-implemented!
}