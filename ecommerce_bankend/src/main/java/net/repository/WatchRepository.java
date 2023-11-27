package net.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.model.Watch;

@Repository
public interface WatchRepository extends JpaRepository<Watch, Long>{

    void changeShoePrice(Long id, double price);
    
}
