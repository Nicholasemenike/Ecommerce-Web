package net.user.service;

import java.util.List;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;
import net.model.User;
import net.services.ServiceInterface;
import net.user.repo.UserRepository;

@Service
@RequiredArgsConstructor
public class UserService implements ServiceInterface{

    private final UserRepository userRepository;

    public List<User> getAllUser() {
        return null;
    }

    public User getUserProfile(Long id) {
        return userRepository.findById(id).get();
    }
    
}
